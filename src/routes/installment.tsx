import { createFileRoute } from "@tanstack/react-router";
import { SapChrome, SapWindow } from "@/components/sap/SapChrome";

export const Route = createFileRoute("/installment")({
  head: () => ({
    meta: [
      { title: "Long Term Loan Installment Process — Wireframe" },
      {
        name: "description",
        content:
          "Installment process wireframe listing due dates, loan numbers, capital, interest and total values for long term loans.",
      },
      { property: "og:title", content: "Long Term Loan Installment Process — Wireframe" },
      {
        property: "og:description",
        content: "Installment process wireframe for long term loan due dates and values.",
      },
    ],
  }),
  component: InstallmentProcess,
});

const HEAD = [
  "Check",
  "Due Date",
  "Loan Number",
  "Capital",
  "Interest Value",
  "Total Value",
  "Bank Account",
  "Capital GL/Account",
  "Interest GL/Account",
  "Bank GL / Account",
  "Rate",
  "Installment T...",
];

const ROWS: string[][] = [
  ["07/30/23", "LL-6282332248", "100,000.00000", "5,000.0000", "105,000.00000", "27020617379", "110111010000", "110108010000", "", "5.00000", "1"],
  ["08/30/23", "LL-6282332248", "100,000.00000", "5,000.0000", "105,000.00000", "27020617379", "110111010000", "110108010000", "", "5.00000", "1"],
  ["09/30/23", "LL-6282332248", "100,000.00000", "5,000.0000", "105,000.00000", "27020617379", "110111010000", "110108010000", "", "5.00000", "1"],
  ["10/30/23", "LL-6282332248", "100,000.00000", "5,000.0000", "105,000.00000", "27020617379", "110111010000", "110108010000", "", "5.00000", "1"],
  ["08/10/23", "LL-752335857", "87,500.00000", "4,375.0000", "91,875.00000", "27020553664", "110105010000", "110108010000", "", "5.00000", "1"],
  ["09/10/23", "LL-752335857", "87,500.00000", "4,375.0000", "91,875.00000", "27020553664", "110105010000", "110108010000", "", "5.00000", "1"],
  ["10/10/23", "LL-752335857", "87,500.00000", "4,375.0000", "91,875.00000", "27020553664", "110105010000", "110108010000", "", "5.00000", "1"],
  ["11/10/23", "LL-752335857", "87,500.00000", "4,375.0000", "91,875.00000", "27020553664", "110105010000", "110108010000", "", "5.00000", "1"],
  ["08/10/23", "LL-752341020", "15,000.00000", "750.0000", "15,750.00000", "0270010414137", "110105010000", "110108010000", "", "5.00000", "1"],
  ["09/10/23", "LL-752341020", "15,000.00000", "750.0000", "15,750.00000", "0270010414137", "110105010000", "110108010000", "", "5.00000", "1"],
  ["10/10/23", "LL-752341020", "15,000.00000", "750.0000", "15,750.00000", "0270010414137", "110105010000", "110108010000", "", "5.00000", "1"],
  ["11/10/23", "LL-752341020", "15,000.00000", "750.0000", "15,750.00000", "0270010414137", "110105010000", "110108010000", "", "5.00000", "1"],
  ["08/12/23", "LL-762395603", "13,888.75000", "2,083.3100", "15,972.06000", "113514020461", "110111010000", "110105010000", "", "5.00000", "2"],
  ["09/12/23", "LL-762395603", "13,888.75000", "1,388.8800", "15,277.63000", "113514020461", "110111010000", "110105010000", "", "5.00000", "2"],
];

function InstallmentProcess() {
  return (
    <SapChrome title="TEST | manager" statusLeft="(Date)">
      <SapWindow caption="Long Term Loan Installment Process">
        <div className="min-h-[470px] p-2">
          {/* Filter bar */}
          <div className="flex items-start gap-3">
            <div className="flex items-center gap-1">
              <div className="w-[54px]">Due Date</div>
              <input className="sap-input w-[130px]" defaultValue="03/01/26" />
            </div>
            <div className="flex flex-col gap-1">
              <button className="sap-button w-[60px]">View</button>
              <button className="sap-button w-[60px]">Clear All</button>
            </div>
            <div className="space-y-[2px]">
              <div className="flex items-center gap-1">
                <div className="w-[76px] truncate">Loan Numbe</div>
                <input className="sap-input w-[130px] bg-sap-highlight/25" />
              </div>
              <div className="flex items-center gap-1">
                <div className="w-[76px] truncate">From Due Da</div>
                <input className="sap-input w-[130px]" />
              </div>
              <div className="flex items-center gap-1">
                <div className="w-[76px] truncate">To Due Date</div>
                <input className="sap-input w-[130px]" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-[3px]">
              <button className="sap-button w-[104px]">Select Loan Nu...</button>
              <button className="sap-button w-[104px]">Select Due Dates</button>
              <button className="sap-button w-[88px]">Select Both</button>
            </div>
          </div>

          {/* Grid */}
          <div className="mt-2 overflow-x-auto border border-sap-grid-line">
            <table className="w-full min-w-[1100px] border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-sap-grid-head text-left">
                  {HEAD.map((h) => (
                    <th key={h} className="border border-sap-grid-line px-1 py-[2px] font-normal">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, r) => (
                  <tr key={r} className={r % 2 ? "bg-sap-row-alt" : "bg-sap-field-bg"}>
                    <td className="border border-sap-grid-line px-1 text-center">
                      <input type="checkbox" defaultChecked className="h-[11px] w-[11px]" />
                    </td>
                    {row.map((cell, c) => (
                      <td key={c} className="border border-sap-grid-line px-1">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-1 h-[13px] border border-sap-grid-line bg-sap-grid-head" />

          <button className="sap-button mt-5 w-[56px]">Process</button>
        </div>
      </SapWindow>
    </SapChrome>
  );
}
