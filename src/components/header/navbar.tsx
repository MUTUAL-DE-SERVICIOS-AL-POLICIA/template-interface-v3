"use client";

import { Avatar, Dropdown, Label, Link, Tooltip } from "@heroui/react";

import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import { urlLogin } from "@/services";

// interface Props {
//   user: User;
//   environment: string;
//   computerToolName: string;
// }

export const Navbar = () => {
  // const onLogout = async () => {
  //   await logout();
  //   window.location.href = `${urlLogin}/login`;
  // };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 w-full items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-4">
          <Tooltip delay={0}>
            <Link
              className="flex justify-start items-center gap-1"
              href={`${urlLogin}/apphub`}
            >
              <Logo height={30} width={80} />
            </Link>
            <Tooltip.Content showArrow placement="right">
              <Tooltip.Arrow />
              <p>Ir a inicio</p>
            </Tooltip.Content>
          </Tooltip>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <ThemeSwitch />
          <div className="hidden md:flex">
            <Dropdown>
              <Dropdown.Trigger className="rounded-full">
                <Avatar>
                  <Avatar.Image alt="Blue" src="/" />
                  <Avatar.Fallback delayMs={600}>Default</Avatar.Fallback>
                </Avatar>
              </Dropdown.Trigger>
              <Dropdown.Popover>
                <div className="px-3 pt-3 pb-1">
                  <div className="flex items-center gap-2">
                    <Avatar size="sm">
                      <Avatar.Fallback delayMs={600} />
                    </Avatar>
                    <div className="flex flex-col gap-0">
                      <p className="text-sm leading-5 font-medium">Jane Doe</p>
                      <p className="text-xs leading-none text-muted">
                        jane@example.com
                      </p>
                    </div>
                  </div>
                </div>
                <Dropdown.Menu>
                  <Dropdown.Item id="dashboard" textValue="Dashboard">
                    <Label>Dashboard</Label>
                  </Dropdown.Item>
                  <Dropdown.Item id="profile" textValue="Profile">
                    <Label>Profile</Label>
                  </Dropdown.Item>
                  <Dropdown.Item id="settings" textValue="Settings">
                    <div className="flex w-full items-center justify-between gap-2">
                      <Label>Settings</Label>
                      {/* <Gear className="size-3.5 text-muted" /> */}
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item id="new-project" textValue="New project">
                    <div className="flex w-full items-center justify-between gap-2">
                      <Label>Create Team</Label>
                      {/* <Persons className="size-3.5 text-muted" /> */}
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="logout"
                    textValue="Logout"
                    variant="danger"
                  >
                    <div className="flex w-full items-center justify-between gap-2">
                      <Label>Log Out</Label>
                      {/* <ArrowRightFromSquare className="size-3.5 text-danger" /> */}
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          </div>
        </div>
      </header>
    </nav>
  );
};
