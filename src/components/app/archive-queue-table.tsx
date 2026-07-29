import { Link } from "@tanstack/react-router";
import { format } from "date-fns";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "./primitives";
import { formatEndsIn } from "./archive-badge";
import { archiveQueue } from "@/data/archive";

export function ArchiveQueueTable({ limit }: { limit?: number }) {
  const rows = limit ? archiveQueue().slice(0, limit) : archiveQueue();

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Event</TableHead>
            <TableHead className="hidden sm:table-cell">Department</TableHead>
            <TableHead>Ends in</TableHead>
            <TableHead className="hidden sm:table-cell">Current status</TableHead>
            <TableHead className="text-right">Estimated archive</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.event.id}>
              <TableCell className="max-w-[220px]">
                <Link
                  to="/events/$eventId"
                  params={{ eventId: r.event.id }}
                  className="block truncate text-sm font-medium hover:text-primary"
                >
                  {r.event.title}
                </Link>
                <span className="text-xs text-muted-foreground">{r.event.club}</span>
              </TableCell>
              <TableCell className="hidden sm:table-cell text-sm text-muted-foreground">
                {r.event.department}
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="rounded-full tabular-nums">
                  {formatEndsIn(r.endsInMs)}
                </Badge>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <StatusBadge status={r.status} />
              </TableCell>
              <TableCell className="text-right text-xs text-muted-foreground">
                {format(new Date(r.estimatedArchive), "dd MMM, h:mm a")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
