-- ==================================================
-- CampusPulse Sample Seed Dataset
-- Production-ready test records for Admin, Organizer, and Student roles
-- ==================================================

USE `campuspulse`;

SET FOREIGN_KEY_CHECKS = 0;

-- 1. SEED DEPARTMENTS
INSERT INTO `departments` (`id`, `name`, `code`, `description`, `hod`, `status`) VALUES
(1, 'Computer Science & Engineering', 'CS', 'Department of Computer Science & Artificial Intelligence', 'Dr. S. R. Murthy', 'Active'),
(2, 'Design & Innovation', 'DS', 'School of Design, UI/UX, and Visual Communication', 'Prof. Ananya Roy', 'Active'),
(3, 'Information Technology', 'IT', 'Department of Information Systems and Cloud Computing', 'Dr. Ramesh Nair', 'Active'),
(4, 'Mechanical Engineering', 'ME', 'Department of Mechanical & Robotics Systems', 'Dr. K. V. Sharma', 'Active'),
(5, 'Civil & Environmental Engineering', 'CE', 'Department of Infrastructure and Structural Engineering', 'Dr. G. P. Das', 'Active');

-- 2. SEED CLUBS
INSERT INTO `clubs` (`id`, `department_id`, `club_name`, `description`, `faculty_coordinator`, `status`) VALUES
(1, 1, 'Codecraft Developers Club', 'Student developers & competitive programming society', 'Prof. Vikram Shah', 'Active'),
(2, 2, 'Design Studio Guild', 'UI/UX design, graphics, and multimedia creative lab', 'Prof. Sneha Menon', 'Active'),
(3, 4, 'Robotics & Automation Society', 'Autonomous robotics and hardware prototyping club', 'Dr. K. V. Sharma', 'Active'),
(4, 1, 'CyberSecurity Guild', 'Ethical hacking and security research group', 'Dr. S. R. Murthy', 'Active');

-- 3. SEED USERS
-- Password hash corresponds to 'password123'
INSERT INTO `users` (`id`, `uuid`, `name`, `email`, `password`, `google_id`, `photo`, `phone`, `role`, `status`, `department_id`, `year`) VALUES
(1, 'u-admin-001-uuid-2026', 'Campus Admin', 'admin@campuspulse.edu', '$2y$10$e.w2D6gE...hashedpassword123', NULL, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb', '+91 98765 00001', 'Admin', 'Active', 1, NULL),
(2, 'u-admin-002-uuid-2026', 'Priya Nambiar', 'priya.n@campus.edu', '$2y$10$e.w2D6gE...hashedpassword123', NULL, 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2', '+91 98765 00002', 'Admin', 'Active', 1, NULL),
(3, 'u-org-001-uuid-2026', 'Campus Organizer', 'organizer@campus.edu', '$2y$10$e.w2D6gE...hashedpassword123', NULL, 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e', '+91 98765 00003', 'Organizer', 'Active', 1, NULL),
(4, 'u-org-002-uuid-2026', 'Dr. Rajesh Verma', 'rajesh.v@campus.edu', '$2y$10$e.w2D6gE...hashedpassword123', NULL, 'https://images.unsplash.com/photo-1560250097-0b93528c311a', '+91 98765 00004', 'Organizer', 'Active', 1, NULL),
(5, 'u-std-001-uuid-2026', 'Aarav Sharma', 'aarav.s@campus.edu', NULL, 'google-sub-100293810239', 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6', '+91 98765 43210', 'Student', 'Active', 1, '3rd Year'),
(6, 'u-std-002-uuid-2026', 'Sneha Pillai', 'sneha.p@campus.edu', NULL, 'google-sub-100293810240', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330', '+91 98765 43211', 'Student', 'Active', 2, '2nd Year');

-- 4. SEED EVENTS
INSERT INTO `events` (`id`, `uuid`, `title`, `description`, `department_id`, `club_id`, `organizer_id`, `venue`, `banner`, `category`, `capacity`, `registration_deadline`, `event_date`, `start_time`, `end_time`, `status`) VALUES
(1, 'ev-001-uuid-2026', 'AI Builders Summit & Hackathon 2026', 'Join 500+ builders for a 24-hour flagship hackathon featuring generative AI APIs, expert mentors, and $10k in prizes.', 1, 1, 3, 'Auditorium Block A', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87', 'Technical', 300, '2026-08-14 23:59:59', '2026-08-15', '09:00:00', '18:00:00', 'Published'),
(2, 'ev-002-uuid-2026', 'UI/UX Design Systems Workshop', 'Master modern Figma design tokens, component architecture, accessible micro-interactions, and visual design systems.', 2, 2, 4, 'Design Studio Lab 3', 'https://images.unsplash.com/photo-1531403009284-440f080d1e12', 'Workshop', 150, '2026-08-19 23:59:59', '2026-08-20', '10:00:00', '16:00:00', 'Published');

-- 5. SEED REGISTRATIONS
INSERT INTO `registrations` (`id`, `event_id`, `student_id`, `registration_date`, `status`, `qr_code`, `checked_in`) VALUES
(1, 1, 5, '2026-07-28 10:00:00', 'Confirmed', 'QR-EV-1-STD-001-20260815', 1),
(2, 2, 5, '2026-07-28 11:30:00', 'Confirmed', 'QR-EV-2-STD-001-20260816', 0),
(3, 1, 6, '2026-07-28 12:00:00', 'Confirmed', 'QR-EV-1-STD-002-20260815', 1);

-- 6. SEED ATTENDANCE
INSERT INTO `attendance` (`id`, `registration_id`, `event_id`, `student_id`, `checked_by`, `check_in_time`, `attendance_status`) VALUES
(1, 1, 1, 5, 4, '2026-08-15 09:14:00', 'Present'),
(2, 3, 1, 6, 4, '2026-08-15 09:22:00', 'Present');

-- 7. SEED CERTIFICATES
INSERT INTO `certificates` (`id`, `event_id`, `student_id`, `certificate_number`, `certificate_url`, `status`) VALUES
(1, 1, 5, 'CERT-HF26-88219', 'https://campuspulse.edu/certificates/CERT-HF26-88219.pdf', 'Issued'),
(2, 1, 6, 'CERT-HF26-88220', 'https://campuspulse.edu/certificates/CERT-HF26-88220.pdf', 'Issued');

-- 8. SEED ANNOUNCEMENTS
INSERT INTO `announcements` (`id`, `title`, `description`, `department_id`, `expiry_date`, `status`, `created_by`) VALUES
(1, 'Hackathon Venue Update', 'The AI Builders Summit check-in desk has moved to Main Auditorium Lobby Block A.', 1, '2026-08-16 23:59:59', 'Active', 3);

-- 9. SEED NOTIFICATIONS
INSERT INTO `notifications` (`id`, `user_id`, `title`, `message`, `type`, `read_status`) VALUES
(1, 5, 'Registration Confirmed', 'You are registered for AI Builders Summit & Hackathon 2026. View your QR pass in My Registrations.', 'Registration', 1),
(2, 6, 'Certificate Ready', 'Your participation certificate for AI Builders Summit is now available for download.', 'Certificate', 0);

-- 10. SEED FEEDBACK
INSERT INTO `feedback` (`id`, `event_id`, `student_id`, `rating`, `feedback`) VALUES
(1, 1, 5, 5, 'Outstanding hackathon organization and excellent mentor support throughout!');

-- 11. SEED ARCHIVES
INSERT INTO `archives` (`id`, `event_id`, `archived_by`, `archive_reason`) VALUES
(1, 1, 1, 'Archived after successful completion and certificate issuance.');

-- 12. SEED AUDIT LOGS
INSERT INTO `audit_logs` (`id`, `user_id`, `action`, `module`, `ip_address`, `device`) VALUES
(1, 1, 'SYSTEM_SCHEMA_INITIALIZED', 'Database', '127.0.0.1', 'Console CLI');

SET FOREIGN_KEY_CHECKS = 1;
