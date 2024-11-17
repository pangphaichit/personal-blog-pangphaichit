import * as React from "react"
import { cn } from "@/lib/utils"

const createTableElement = (Component, defaultClass) => {
    return React.forwardRef(({ className, ...props }, ref) => {
      return React.createElement(
        Component,  // Component name as a reference
        {
          ref,
          className: cn(defaultClass, className),
          ...props,
        }
      );
    });
  };

const Table = createTableElement("table", "w-full caption-bottom text-sm")
Table.displayName = "Table"

const TableHeader = createTableElement("thead", "[&_tr]:border-b")
TableHeader.displayName = "TableHeader"

const TableBody = createTableElement("tbody", "[&_tr:last-child]:border-0")
TableBody.displayName = "TableBody"

const TableFooter = createTableElement("tfoot", "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0")
TableFooter.displayName = "TableFooter"

const TableRow = createTableElement("tr", "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted")
TableRow.displayName = "TableRow"

const TableHead = createTableElement("th", "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0")
TableHead.displayName = "TableHead"

const TableCell = createTableElement("td", "p-4 align-middle [&:has([role=checkbox])]:pr-0")
TableCell.displayName = "TableCell"

const TableCaption = createTableElement("caption", "mt-4 text-sm text-muted-foreground")
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
