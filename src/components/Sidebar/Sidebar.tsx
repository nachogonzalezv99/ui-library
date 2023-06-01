import React, { ReactElement, ReactNode } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { AiOutlineDown } from "react-icons/ai";

interface SidebarProps {
  children: ReactNode;
}
function Sidebar({ children }: SidebarProps) {
  return (
    <div className="flex flex-col gap-1 border-r border-gray-200 bg-gray-50 p-1 w-72 h-full overflow-y-auto">
      {children}
    </div>
  );
}

interface SidebarItemProps {
  children: ReactNode;
}
Sidebar.Item = function SidebarItem({ children }: SidebarItemProps) {
  return (
    <div className="flex items-center gap-2 p-2 rounded-md  h-11 hover:bg-gray-100 hover:text-gray-800 cursor-pointer">
      {children}
    </div>
  );
};

interface SidebarAccordionProps {
  children: ReactNode;
  title: string;
}
Sidebar.Accordion = function SidebarAccordion({
  children,
  title,
}: SidebarAccordionProps) {
  return (
    <Accordion.Root type="single" defaultValue="item-1" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Header>
          <Accordion.Trigger className="p-2 flex w-full group ">
            {title}
            <div className="ml-auto">
              <AiOutlineDown className="text-md text-gray-500 ml-12 origin-center transition-transform duration-300  group-radix-state-open:rotate-180" />
            </div>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="radix-state-open:animate-slide-down radix-state-closed:animate-slide-up overflow-hidden">
          <div className="ml-7">{children}</div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default Sidebar;
