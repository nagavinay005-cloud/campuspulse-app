// Centralized Production Logger & Monitoring Layer for CampusPulse
// Supports Logging for Auth, Database, Archive Engine, Notifications, Attendance, Certificates, Performance

export type LogCategory =
  | "AUTH"
  | "FIRESTORE"
  | "ARCHIVE_ENGINE"
  | "NOTIFICATIONS"
  | "ATTENDANCE"
  | "CERTIFICATES"
  | "PERFORMANCE"
  | "ERROR";

export interface LogEntry {
  id: string;
  category: LogCategory;
  message: string;
  detail?: any;
  timestamp: string;
}

const memoryLogs: LogEntry[] = [];
let logListeners: ((logs: LogEntry[]) => void)[] = [];

function dispatchLog(entry: LogEntry) {
  memoryLogs.unshift(entry);
  if (memoryLogs.length > 200) memoryLogs.pop();
  logListeners.forEach((fn) => fn([...memoryLogs]));
}

export const logger = {
  info(category: LogCategory, message: string, detail?: any) {
    const entry: LogEntry = {
      id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      category,
      message,
      detail,
      timestamp: new Date().toISOString(),
    };
    if (process.env.NODE_ENV !== "production") {
      console.log(`[${entry.category}] ${entry.message}`, detail || "");
    }
    dispatchLog(entry);
  },

  error(category: LogCategory, message: string, errorDetail?: any) {
    const entry: LogEntry = {
      id: `err-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      category: "ERROR",
      message: `[${category}] ${message}`,
      detail: errorDetail,
      timestamp: new Date().toISOString(),
    };
    console.error(`❌ [${category}_ERROR] ${message}`, errorDetail || "");
    dispatchLog(entry);
  },

  getLogs(): LogEntry[] {
    return [...memoryLogs];
  },

  subscribe(callback: (logs: LogEntry[]) => void) {
    logListeners.push(callback);
    callback([...memoryLogs]);
    return () => {
      logListeners = logListeners.filter((fn) => fn !== callback);
    };
  },
};
