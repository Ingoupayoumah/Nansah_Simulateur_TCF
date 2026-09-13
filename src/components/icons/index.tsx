export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" {...stroke}>
      <path d="M22 10L12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
    </svg>
  );
}

export function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" />
    </svg>
  );
}

export function PencilIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" {...stroke}>
      <path d="M4 20l.9-3.9a2 2 0 01.54-.98L16.5 4.05a2 2 0 012.83 0l.62.62a2 2 0 010 2.83L8.88 18.56a2 2 0 01-.98.54L4 20Z" />
      <path d="M14.5 6.5l3 3" />
    </svg>
  );
}

export function MicIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" {...stroke}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0014 0" />
      <path d="M12 18v3M9 21h6" />
    </svg>
  );
}

export function BookOpenIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" {...stroke}>
      <path d="M3 5.5C4.5 4.5 7 4 9 4.5c1.3.3 2.3.9 3 1.6 0.7-.7 1.7-1.3 3-1.6 2-.5 4.5 0 6 1V18c-1.5-1-4-1.5-6-1-1.3.3-2.3.9-3 1.6-.7-.7-1.7-1.3-3-1.6-2-.5-4.5 0-6 1Z" />
      <path d="M12 6.1V19" />
    </svg>
  );
}

export function HeadphonesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" {...stroke}>
      <path d="M4 14v-2a8 8 0 0116 0v2" />
      <rect x="3" y="14" width="4" height="6" rx="1.5" />
      <rect x="17" y="14" width="4" height="6" rx="1.5" />
    </svg>
  );
}

export function CertificateIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" {...stroke}>
      <rect x="3" y="3" width="18" height="13" rx="2" />
      <path d="M7 7h10M7 10.5h6" />
      <path d="M9.5 16l-1 5 3.5-2 3.5 2-1-5" />
    </svg>
  );
}

export function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" {...stroke}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
    </svg>
  );
}

export function CalculatorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" {...stroke}>
      <rect x="4" y="2.5" width="16" height="19" rx="2" />
      <path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15v4M8 19h.01M12 19h.01" />
    </svg>
  );
}

export function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" {...stroke}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}

export function InfinityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" {...stroke}>
      <path d="M7 9a4 4 0 100 8 6 6 0 004-2c.7-.7 1.3-2 2-2s1.3 1.3 2 2a6 6 0 004 2 4 4 0 100-8 6 6 0 00-4 2c-.7.7-1.3 2-2 2s-1.3-1.3-2-2a6 6 0 00-4-2Z" />
    </svg>
  );
}

export function MedalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" {...stroke}>
      <circle cx="12" cy="15" r="6" />
      <path d="M9 9.5L6 3M15 9.5l3-6.5" />
      <path d="M12 12v6" />
    </svg>
  );
}

export function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.8l-6.1 3.2 1.5-6.8-5.2-4.7 6.9-.7L12 2.5z" />
    </svg>
  );
}

export function LightbulbIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" {...stroke}>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 00-3.6 10.8c.6.45 1 .95 1.1 1.7h5c.1-.75.5-1.25 1.1-1.7A6 6 0 0012 3Z" />
    </svg>
  );
}

export function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" {...stroke}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.5 19c0-3.3 3-5.5 6.5-5.5s6.5 2.2 6.5 5.5" />
      <path d="M16 8.2a3.2 3.2 0 010 6.1M21.5 19c0-2.6-1.9-4.5-4.5-5.2" />
    </svg>
  );
}
