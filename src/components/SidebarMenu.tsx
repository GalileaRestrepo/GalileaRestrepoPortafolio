interface SidebarMenuProps {
  items: { nombre: string; link: string }[];
}

function SidebarMenu(props: SidebarMenuProps) {
  return (
    <aside className="hidden md:block rounded-3xl bg-white p-8 shadow-sm sticky top-8 h-fit">
      <h3 className="text-2xl font-bold mb-6">Explore</h3>
      <nav className="flex flex-col gap-4">{props.items.map((item) => (<a key={item.nombre} href={item.link} className="text-lg hover:text-gray-600 focus-visible:outline-2 transition-colors">{item.nombre}</a>))}
      </nav>
    </aside>
  );
}

export default SidebarMenu;