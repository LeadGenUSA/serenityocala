import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const pages = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Resources", href: "/resources" },
  { name: "Self-Assessment", href: "/self-assessment" },
];

const resources = [
  { name: "EMDR Therapy", href: "/resources/emdr-therapy" },
  { name: "CBT Therapy", href: "/resources/cbt" },
  { name: "EFT Therapy", href: "/resources/eft" },
  { name: "Differential Gene Expression", href: "/resources/differential-gene-expression" },
  { name: "Animal-Assisted Therapy", href: "/resources/animal-assisted-therapy" },
];

const information = [
  { name: "Directions", href: "/directions" },
  { name: "Policies & Procedures", href: "/policies-and-procedures" },
  { name: "Fees & Insurance", href: "/fees-and-insurance" },
  { name: "Cancellations", href: "/cancellations" },
];

export const SiteSearch = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      window.location.hash = href;
    } else {
      navigate(href);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="p-2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Search site"
      >
        <Search className="w-5 h-5" />
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search pages..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {pages.map((p) => (
              <CommandItem key={p.href} onSelect={() => go(p.href)}>
                {p.name}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Resources">
            {resources.map((p) => (
              <CommandItem key={p.href} onSelect={() => go(p.href)}>
                {p.name}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Information">
            {information.map((p) => (
              <CommandItem key={p.href} onSelect={() => go(p.href)}>
                {p.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
