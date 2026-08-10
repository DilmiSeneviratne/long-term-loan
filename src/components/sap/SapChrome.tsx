import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import toolbarAsset from "@/assets/toolbar.png.asset.json";
import sapAsset from "@/assets/sap.png.asset.json";

const MENUS = ["File", "Edit", "View", "Data", "Go To", "Modules", "Tools", "Window", "Help"];

const MODULES: { label: string; sub?: { label: string; to?: string }[] }[] = [
  { label: "Administration", sub: [] },
  { label: "Financials", sub: [] },
  { label: "CRM", sub: [] },
  { label: "Opportunities", sub: [] },
  { label: "Sales - A/R", sub: [] },
  { label: "Purchasing - A/P", sub: [] },
  { label: "Business Partners", sub: [] },
  { label: "Banking", sub: [] },
  { label: "Inventory", sub: [] },
  { label: "Resources", sub: [] },
  { label: "Production", sub: [] },
  { label: "MRP", sub: [] },
  { label: "Service", sub: [{ label: "Long Term Loan", to: "/" }] },
  { label: "Human Resources", sub: [] },
  { label: "Project Management", sub: [] },
  { label: "Reports", sub: [] },
  { label: "Loan Details", sub: [{ label: "Loan", to: "/installment" }] },
  { label: "Lease Details", sub: [] },
  { label: "Approval Addon", sub: [] },
];

export function SapChrome({
  title,
  children,
  statusLeft,
}: {
  title: string;
  children: ReactNode;
  statusLeft?: string;
}) {
  const [modulesOpen, setModulesOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="sap-font min-h-screen w-full bg-sap-desktop py-0 text-sap-label">
      <div className="mx-auto flex w-[1117px] max-w-full flex-col border border-sap-window-border bg-sap-app-bg shadow-lg">
      {/* Menu bar */}
      <div className="sap-menubar relative flex items-center px-1 text-background">
        <div className="flex">
          {MENUS.map((m) => (
            <button
              key={m}
              onClick={() => setModulesOpen(m === "Modules" ? !modulesOpen : false)}
              className={`px-2 py-[3px] ${
                m === "Modules" && modulesOpen
                  ? "bg-sap-highlight text-sap-label"
                  : "hover:bg-white/20"
              }`}
            >
              <span className="underline decoration-1 underline-offset-1">{m.charAt(0)}</span>
              {m.slice(1)}
            </button>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 flex justify-center">
          <span className="text-[12px] font-bold text-background underline">{title}</span>
        </div>
        <div className="ml-auto flex items-center gap-1 pr-1 text-[10px]">
          <span className="tracking-tighter">▤</span>
          <span className="inline-block h-3 w-3 border border-sap-field-border bg-sap-grid-head" />
          <span className="inline-block h-3 w-3 border border-sap-field-border bg-sap-grid-head" />
          <span className="inline-block h-3 w-3 border border-sap-btn-border bg-destructive" />
        </div>

        {modulesOpen && (
          <div
            className="absolute left-[152px] top-full z-50 w-[180px] border border-sap-window-border bg-sap-menubar py-[2px] shadow-md"
            onMouseLeave={() => setHovered(null)}
          >
            {MODULES.map((mod) => (
              <div
                key={mod.label}
                className="relative"
                onMouseEnter={() => setHovered(mod.label)}
              >
                <div
                  className={`flex items-center justify-between px-2 py-[2px] ${
                    hovered === mod.label ? "bg-sap-highlight" : ""
                  }`}
                >
                  <span>
                    <span className="underline decoration-1 underline-offset-1">
                      {mod.label.charAt(0)}
                    </span>
                    {mod.label.slice(1)}
                  </span>
                  <span className="text-[8px]">▶</span>
                </div>
                {hovered === mod.label && mod.sub && mod.sub.length > 0 && (
                  <div className="absolute left-full top-0 z-50 w-[150px] border border-sap-window-border bg-sap-menubar py-[2px] shadow-md">
                    {mod.sub.map((s) => (
                      <Link
                        key={s.label}
                        to={s.to ?? "/"}
                        onClick={() => setModulesOpen(false)}
                        className="block px-3 py-[2px] hover:bg-sap-highlight"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Toolbar */}
      <div className="border-b border-sap-grid-line bg-sap-menubar">
        <img src={toolbarAsset.url} alt="SAP Business One toolbar" className="h-[30px] w-full object-fill" />
      </div>

      {/* Window */}
      <div className="p-0">{children}</div>

      {/* Status bar */}
      <div className="border-t border-sap-grid-line bg-sap-app-bg px-1 pb-1 pt-1">
        <div className="flex items-end gap-1">
          <div className="flex-1 space-y-[2px]">
            <div className="flex gap-1">
              <div className="h-[15px] flex-1 border border-sap-field-border bg-sap-grid-head px-1">
                {statusLeft}
              </div>
              <div className="h-[15px] w-[90px] border border-sap-field-border bg-sap-grid-head text-center">
                08/10/26
              </div>
              <div className="h-[15px] flex-1 border border-sap-field-border bg-sap-grid-head" />
              <div className="h-[15px] flex-1 border border-sap-field-border bg-sap-grid-head" />
            </div>
            <div className="flex gap-1">
              <div className="h-[15px] flex-1 border border-sap-field-border bg-sap-grid-head" />
              <div className="h-[15px] w-[90px] border border-sap-field-border bg-sap-grid-head text-center">
                11:13AM
              </div>
              <div className="h-[15px] flex-1 border border-sap-field-border bg-sap-grid-head" />
              <div className="h-[15px] flex-1 border border-sap-field-border bg-sap-grid-head" />
            </div>
          </div>
          <img src={sapAsset.url} alt="SAP Business One" className="h-[30px] w-[105px] object-contain" />
        </div>
      </div>
      </div>
    </div>
  );
}

export function SapWindow({
  caption,
  children,
  dark,
}: {
  caption: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="m-[2px] border border-sap-window-border bg-sap-window-bg">
      <div className="h-[3px] bg-sap-accent" />
      <div className="flex items-center justify-between border-b border-sap-grid-line bg-sap-grid-head px-1 py-[2px] text-[11px]">
        <span className="text-sap-label">{caption}</span>
        <span className="flex gap-[2px]">
          {["_", "▣", "✕"].map((s, i) => (
            <span
              key={i}
              className="inline-flex h-[13px] w-[14px] items-center justify-center border border-sap-field-border bg-sap-grid-head text-[8px] text-sap-label"
            >
              {s}
            </span>
          ))}
        </span>
      </div>
      <div className="p-0">{children}</div>
    </div>
  );
}
