import Link from "next/link";

export default function SideNav(){
    return <div>
        <nav className='text-red-600'>Current User</nav>
        <nav><Link href='/dashboard/1'>Conversation 1</Link></nav>
        <nav><Link href='/dashboard/2'>Conversation 2</Link></nav>
        <nav><Link href='/dashboard/3'>Conversation 3</Link></nav>
        <nav><Link href='/dashboard/4'>Conversation 4</Link></nav>
    </div>
}