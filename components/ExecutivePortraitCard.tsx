import Image from "next/image";
import { Mail, Phone } from "lucide-react";

type ExecutivePortraitCardProps = {
  name: string;
  label: string; // role/title
  image: string;
  initial: string;
  phone?: string;
  email?: string;
  bio?: string;
};

function getBioSnippet(bio: string, maxChars = 140) {
  const trimmed = bio.trim();
  if (trimmed.length <= maxChars) return trimmed;
  return `${trimmed.slice(0, maxChars).trimEnd()}...`;
}

export default function ExecutivePortraitCard({
  name,
  label,
  image,
  initial,
  phone,
  email,
  bio,
}: ExecutivePortraitCardProps) {
  const hasContact = Boolean(phone || email);
  const bioSnippet = bio ? getBioSnippet(bio) : "";

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out bg-white">
      {/* Portrait image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Always-visible gradient strip */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 p-3">
          <p className="text-xs font-semibold text-brand-300 uppercase tracking-wide mb-0.5 group-hover:opacity-0 transition-opacity duration-200">
            {label}
          </p>
          <h3 className="text-white font-bold text-base leading-tight group-hover:opacity-0 transition-opacity duration-200">
            {name}
          </h3>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center px-4 text-center">
          <div className="w-14 h-14 rounded-full bg-brand/20 border-2 border-brand/40 flex items-center justify-center mb-2.5">
            <span className="text-white font-bold text-xl">{initial}</span>
          </div>
          <h3 className="text-white font-bold text-lg leading-tight mb-1">{name}</h3>
          <p className="text-brand-300 text-xs font-semibold uppercase tracking-wider mb-4">
            {label}
          </p>

          {hasContact ? (
            <div className="space-y-2 w-full">
              {phone ? (
                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-center gap-2 text-sm text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-lg py-2 px-3"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-brand-300" />
                  <span>{phone}</span>
                </a>
              ) : null}

              {email ? (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center justify-center gap-2 text-sm text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-lg py-2 px-3 truncate"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-brand-300" />
                  <span>{email}</span>
                </a>
              ) : null}
            </div>
          ) : null}

          {bio ? (
            <p className="text-white/75 text-xs leading-relaxed w-full max-h-16 overflow-hidden mt-3">
              {bioSnippet}
            </p>
          ) : null}
        </div>
      </div>

      {/* Below-image info bar */}
      <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
        <div className="min-w-0">
          <p className="text-xs text-brand font-semibold uppercase tracking-wide truncate">
            {label}
          </p>
          <p className="text-sm font-bold text-ngo-black truncate mt-0.5">{name}</p>
        </div>

        {hasContact ? (
          <div className="flex gap-2 ml-3 shrink-0">
            {phone ? (
              <a
                href={`tel:${phone}`}
                className="w-8 h-8 rounded-full bg-brand-50 hover:bg-brand flex items-center justify-center transition-colors duration-200 group/icon"
                aria-label={`Call ${name}`}
              >
                <Phone className="h-3.5 w-3.5 text-brand group-hover/icon:text-white transition-colors" />
              </a>
            ) : null}

            {email ? (
              <a
                href={`mailto:${email}`}
                className="w-8 h-8 rounded-full bg-brand-50 hover:bg-brand flex items-center justify-center transition-colors duration-200 group/icon"
                aria-label={`Email ${name}`}
              >
                <Mail className="h-3.5 w-3.5 text-brand group-hover/icon:text-white transition-colors" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>

      {/* Bio below contact bar */}
      {bio ? (
        <div className="px-4 pb-4 border-t border-gray-100 pt-3">
          <p className="text-gray-500 text-xs leading-relaxed">{bioSnippet}</p>
        </div>
      ) : null}
    </div>
  );
}

