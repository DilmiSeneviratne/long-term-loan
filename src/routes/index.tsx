import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SapChrome, SapWindow } from "@/components/sap/SapChrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Long Term Loan — SAP Business One Wireframe" },
      {
        name: "description",
        content:
          "Long Term Loan document wireframe with General, Attachment and Schedule tabs including default interest rate, days and value columns.",
      },
      { property: "og:title", content: "Long Term Loan — SAP Business One Wireframe" },
      {
        property: "og:description",
        content:
          "Long Term Loan document wireframe with General, Attachment and Schedule tabs.",
      },
    ],
  }),
  component: LongTermLoan,
});

const F = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex items-center gap-1">
    <div className="w-[104px] shrink-0 truncate">{label}</div>
    <div className="w-[128px]">{children}</div>
  </div>
);

const Txt = ({ v }: { v?: string }) => <input className="sap-input" defaultValue={v} />;
const Sel = ({ v }: { v: string }) => (
  <select className="sap-input" defaultValue={v}>
    <option>{v}</option>
  </select>
);

const SCHEDULE = [
  ["0", "03/01/26", "0.00000", "0.00000", "0.0000", "35,000,000.00000", "Pending"],
  ["1", "04/01/26", "617,845.64790", "267,845.64790", "350,000.0000", "34,732,154.35210", "Pending"],
  ["2", "05/01/26", "617,845.64790", "270,524.10438", "347,321.5435", "34,461,630.24773", "Complete"],
  ["3", "06/01/26", "617,845.64790", "273,229.34542", "344,616.3025", "34,188,400.90231", "Complete"],
  ["4", "07/01/26", "617,845.64790", "275,961.63887", "341,884.0090", "33,912,439.26343", "Complete"],
  ["5", "08/01/26", "617,845.64790", "278,721.25526", "339,124.3926", "33,633,718.00817", "Complete"],
  ["6", "09/01/26", "617,845.64790", "281,508.46782", "336,337.1801", "33,352,209.54035", "Complete"],
  ["7", "10/01/26", "617,845.64790", "284,323.55249", "333,522.0954", "33,067,885.98786", "Pending"],
  ["8", "11/01/26", "617,845.64790", "287,166.78802", "330,678.8599", "32,780,719.19984", "Pending"],
  ["9", "12/01/26", "617,845.64790", "290,038.45590", "327,807.1920", "32,490,680.74394", "Pending"],
  ["10", "01/01/27", "617,845.64790", "292,938.84046", "324,906.8074", "32,197,741.90348", "Pending"],
];

const EXTRA = [
  ["0.0000", "0", "0.0000"],
  ["2.0000", "30", "0.0000"],
  ["2.0000", "31", "0.0000"],
  ["2.0000", "30", "0.0000"],
  ["2.0000", "31", "0.0000"],
  ["2.0000", "31", "0.0000"],
  ["2.0000", "30", "0.0000"],
  ["2.0000", "31", "0.0000"],
  ["2.0000", "30", "0.0000"],
  ["2.0000", "31", "0.0000"],
  ["2.0000", "31", "0.0000"],
];

function LongTermLoan() {
  const [tab, setTab] = useState<"General" | "Attachment" | "Schedule">("General");

  return (
    <SapChrome title="TEST | manager">
      <SapWindow caption="Long Term Loan" dark>
        <div className="min-h-[470px] p-2">
          {/* Document header */}
          <div className="mb-1 space-y-[1px]">
            <div className="flex items-center gap-1">
              <div className="w-[80px]">Document No</div>
              <div className="w-[128px]">
                <Txt v="111" />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[80px]">Status</div>
              <div className="w-[128px]">
                <Sel v="Draft" />
              </div>
            </div>
            <div className="flex h-[10px] items-start gap-1 overflow-hidden">
              <div className="w-[80px]">Approval</div>
              <div className="w-[128px]">
                <Txt v="Pending" />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-2 flex gap-[2px] pl-4">
            {(["General", "Attachment", "Schedule"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`w-[80px] border border-b-0 border-sap-window-border px-2 pb-[3px] pt-[3px] ${
                  tab === t ? "bg-sap-form-bg font-normal" : "bg-sap-grid-head"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="border border-sap-window-border bg-sap-form-bg p-3">
            {tab === "General" && (
              <div className="grid grid-cols-2 gap-x-8 gap-y-[2px] px-4 py-2">
                <div className="space-y-[2px]">
                  <F label="Loan No"><Txt v="LL-21326111733" /></F>
                  <F label="Bank"><Txt v="7278" /></F>
                  <F label="Bank Name"><Txt v="Sampath Bank" /></F>
                  <F label="Branch"><Sel v="Gangodawila" /></F>
                  <F label="Bank Account"><Sel v="13510001685" /></F>
                  <F label="Capital G/L Accou"><Txt v="11110000IM00" /></F>
                  <F label="G/L Name"><Txt v="Loan Account-Test final" /></F>
                  <F label="Bank G/L Account"><Txt v="125010140000" /></F>
                  <F label="Interest G/L Acco"><Txt v="63031103IMP1" /></F>
                  <F label="Feasibility Study l"><Sel v="YES" /></F>
                  <div className="h-3" />
                  <F label="Agreement No"><Txt v="TEST  2234" /></F>
                  <F label="Default Interest"><Txt v="" /></F>
                  <F label="Default Interest P"><Sel v="Daily" /></F>
                </div>
                <div className="space-y-[2px]">
                  <F label="Installment Type"><Sel v="Simple Interest - Variab" /></F>
                  <F label="Interest Rate"><Txt v="12.00000" /></F>
                  <F label="Amount"><Txt v="35,000,000.00000" /></F>
                  <F label="Period"><Txt v="84" /></F>
                  <F label="Is Interst Rate Ch"><Sel v="No" /></F>
                  <F label="New Interest Rate">
                    <input className="sap-input bg-sap-grid-head" defaultValue="0.0000" readOnly />
                  </F>
                  <F label="New Period"><Txt v="" /></F>
                  <div className="h-2" />
                  <F label="Interest Payment"><Sel v="Months" /></F>
                  <F label="Schedule Start Da"><Txt v="03/01/26" /></F>
                  <F label="Email Address"><Txt v="dinuka@pbs.com" /></F>
                  <F label="Document Compl"><Sel v="Yes" /></F>
                  <F label="Document Subm"><Sel v="Yes" /></F>
                  <div className="flex gap-1">
                    <div className="w-[104px] shrink-0">Remark</div>
                    <textarea className="sap-input h-[60px] w-[128px] resize-none" />
                  </div>
                </div>
              </div>
            )}

            {tab === "Attachment" && (
              <div className="flex gap-2">
                <div className="flex-1">
                  <div className="border border-sap-grid-line">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-sap-grid-head text-left">
                          {["#", "Document Name", "File Name", "Reference", "Remark"].map((h, i) => (
                            <th
                              key={h}
                              className={`border border-sap-grid-line px-1 py-[2px] font-normal ${
                                i === 0 ? "w-[18px]" : ""
                              }`}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 11 }).map((_, r) => (
                          <tr key={r} className="h-[17px] bg-sap-field-bg">
                            {Array.from({ length: 5 }).map((__, c) => (
                              <td key={c} className="border border-sap-grid-line px-1" />
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-1 h-[13px] border border-sap-grid-line bg-sap-grid-head" />
                </div>
                <div className="flex w-[60px] flex-col gap-[52px] pt-2">
                  <button className="sap-button">Browse</button>
                  <button className="sap-button">Display</button>
                  <button className="sap-button mt-[52px]">Delete</button>
                </div>
              </div>
            )}

            {tab === "Schedule" && (
              <div className="flex gap-2">
                <div className="min-w-0 flex-1">
                  <div className="overflow-x-auto border border-sap-grid-line">
                    <table className="w-full min-w-[1100px] border-collapse whitespace-nowrap">
                      <thead>
                        <tr className="bg-sap-grid-head text-left">
                          {[
                            "#",
                            "LineId",
                            "Due Date",
                            "Paymnt",
                            "Principal",
                            "Interest Value",
                            "Balance",
                            "Status",
                            "Dafault Interest Rate",
                            "No.of Days",
                            "Value",
                          ].map((h, i) => (
                            <th
                              key={h}
                              className={`border border-sap-grid-line px-1 py-[2px] font-normal ${
                                i === 0 ? "w-[18px]" : ""
                              }`}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {SCHEDULE.map((row, r) => (
                          <tr key={r} className={r % 2 ? "bg-sap-row-alt" : "bg-sap-field-bg"}>
                            <td className="border border-sap-grid-line px-1">{row[0]}</td>
                            {row.map((cell, c) => (
                              <td key={c} className="border border-sap-grid-line px-1">
                                {cell}
                              </td>
                            ))}
                            {(EXTRA[r] ?? []).map((cell, c) => (
                              <td key={`e${c}`} className="border border-sap-grid-line px-1">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-1 h-[13px] border border-sap-grid-line bg-sap-grid-head" />
                </div>
                <div className="w-[60px] pt-0">
                  <button className="sap-button">Calculate</button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 flex gap-2 pl-4">
            <button className="sap-button w-[56px]">OK</button>
            <button className="sap-button w-[56px]">Cancel</button>
          </div>
        </div>
      </SapWindow>
    </SapChrome>
  );
}
