import { Logo } from "./Logo";
import { List, X } from 'phosphor-react';
import {useState} from 'react';

interface HeaderProps {
  open: boolean;
  onToggleSidebar: () => void;
}

export function Header({open=false,onToggleSidebar}: HeaderProps)  {
  return (
    <header className="w-full px-4 py-3 flex items-center justify-between bg-gray-700 border-b border-gray-600 lg:py-5 lg:justify-center">
      <Logo />

      <div className="lg:hidden cursor-pointer w-8 h-8 flex items-center justify-center" onClick={onToggleSidebar}>
        {open ? <X size={24} /> : <List size={24} />}
      </div>
    </header>
  );
}
