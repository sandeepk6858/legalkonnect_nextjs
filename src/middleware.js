export { default } from "next-auth/middleware";
export const config = {
  matcher: ['/jobs/:path*','/orders','/account/:path*','/weekly_summary','/timesheet','/find-attorney-legal-support','/substitute-attorneys:path*','/substitute-attorneys-job:path*s','/motions:path*','/transcripts:path*','/forum:path*','/experts:path*','/process-servers:path*','/court-reporters:path*','/investigato:path*r','/attorneys:path*','/promos','/paralegal-support','/messages'],
};