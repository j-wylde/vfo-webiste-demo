/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0kjNJg1vDU6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {Button} from '../~/components/ui/button'
import { Input } from "../~/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../~/components/ui/dropdown-menu"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "../~/components/ui/card"
import { RxHome } from "react-icons/rx";


export default function Component() {
  return (
    <>
      <div className="container mx-auto grid min-h-screen bg-gray-100/40 lg:grid-cols-[280px_1fr] dark:bg-gray-800/40 overflow-hidden">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border-b px-6">
              <span className="flex items-center gap-2 font-semibold" href="#">
                <Package2Icon className="h-6 w-6" />
                <span className="font-bold text-black">VFA</span>
              </span>
              <Button
                className="ml-auto h-8 w-8 border-gray-200 dark:border-gray-800"
                size="icon"
                variant="outline"
              >
                <BellIcon className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>

            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium text-gray-500">
                <span className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  <RxHome className="h-4 w-4" />
                  Home
                </span>

                <span
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <UsersIcon className="h-4 w-4" />
                  Profile
                </span>
                <span
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <PackageIcon className="h-4 w-4" />
                  Teams
                </span>
                <span
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <CalendarIcon className="h-4 w-4" />
                  Schedule
                </span>
                <span
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <AwardIcon className="h-4 w-4" />
                  Standings
                </span>
                <span
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <MessageSquareIcon className="h-4 w-4" />
                  Chat
                </span>
              </nav>
            </div>

            <div className="flex h-[60px] items-center border-t px-6">
              <Button className="mx-auto w-full h-10">Create a new team</Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <span
              className="lg:hidden text-2xl font-semibold flex items-center gap-2"
              href="#"
            >
              VFA
            </span>
            <div className="w-full flex-1">
              <form>
                <div className="relative">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <Input
                    className="w-full bg-gray-100/50 appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-800/50"
                    placeholder="Search..."
                    type="search"
                  />
                </div>
              </form>
            </div>

            {/* mobile menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                  id="user-menu"
                  size="icon"
                  variant="ghost"
                >
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle>Fixtures</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="flex flex-row gap-4 justify-between items-center">
                    <button className="bg-slate-100 rounded-sm p-6">
                      <img
                        alt="Team logo"
                        className="rounded-full"
                        height="150"
                        src="https://cdn.iconscout.com/icon/premium/png-512-thumb/football-club-10-1047821.png?f=webp&w=256"
                        style={{
                          aspectRatio: "150/150",
                          objectFit: "cover",
                        }}
                        width="150"
                      />
                    </button>
                    <button className="text-lg font-semibold rounded-lg text-center p-3 bg-[#18181B] text-white">
                      VS
                    </button>
                    <button className="bg-slate-100 rounded-sm p-6">
                      <img
                        alt="Team logo"
                        className="rounded-full"
                        height="150"
                        src="https://cdn.iconscout.com/icon/premium/png-512-thumb/soccer-club-7-1047864.png?f=webp&w=256"
                        style={{
                          aspectRatio: "150/150",
                          objectFit: "cover",
                        }}
                        width="150"
                      />
                    </button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View match</Button>
                </CardFooter>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>League Standings</CardTitle>
                  <CardDescription>
                    Current position in the league
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                      <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                          <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                            <thead>
                              <tr>
                                <th
                                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                  scope="col"
                                ></th>
                                <th
                                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                  scope="col"
                                >
                                  P
                                </th>
                                <th
                                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                  scope="col"
                                >
                                  W
                                </th>
                                <th
                                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                  scope="col"
                                >
                                  D
                                </th>
                                <th
                                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                  scope="col"
                                >
                                  L
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                              <tr className="hover:bg-gray-100 dark:hover:bg-neutral-700">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                  <img
                                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/football-club-10-1047821.png?f=webp&w=256"
                                    width={25}
                                    height={25}
                                  />
                                  VF Schburg
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-800 dark:text-neutral-200">
                                  10
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-800 dark:text-neutral-200">
                                  7
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                  2
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                  1
                                </td>
                              </tr>
                              <tr className="hover:bg-gray-100 dark:hover:bg-neutral-700">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                  <img
                                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/soccer-club-5-1047840.png?f=webp&w=256"
                                    width={25}
                                    height={25}
                                  />
                                  VF Sinor
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-800 dark:text-neutral-200">
                                  10
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-800 dark:text-neutral-200">
                                  5
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                  3
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                  2
                                </td>
                              </tr>
                              <tr className="hover:bg-gray-100 dark:hover:bg-neutral-700">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                  <img
                                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/soccer-club-7-1047864.png?f=webp&w=256"
                                    width={25}
                                    height={25}
                                  />
                                  VF Mainez
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-800 dark:text-neutral-200">
                                  10
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-800 dark:text-neutral-200">
                                  4
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                  2
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                  4
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Full Standings</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
              <img
                alt="Match image"
                className="aspect-square object-cover rounded-lg mx-auto"
                src="https://placehold.co/400"
              />
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Match Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="">
                  <div className="grid grid-cols-5 text-center py-2">
                    <div className="col-span-1 font-bold">DATE TIME</div>
                    <div className="col-span-1 font-bold">HOME TEAM</div>
                    <div className="col-span-1 font-bold">SCORE</div>
                    <div className="col-span-1 font-bold">AWAY TEAM</div>
                  </div>
                  <div className="grid grid-cols-5 text-center border-t border-gray-700">
                    <div className="py-4">14/04/24 20:30</div>
                    <div className="py-4 flex justify-center items-center">
                      <TrophyIcon className="mr-2" />
                      VFO AC Milan
                    </div>
                    <div className="py-4 bg-[#18181B] text-white">
                      0 - 5 (HT 0-2)
                    </div>
                    <div className="py-4">VFO Inter Miami</div>
                  </div>
                  <div className="grid grid-cols-5 text-center border-t border-gray-700">
                    <div className="py-4">14/04/24 20:30</div>
                    <div className="py-4 flex justify-center items-center">
                      <TrophyIcon className="mr-2" />
                      VFO Ajax Amsterdam
                    </div>
                    <div className="py-4 bg-[#18181B] text-white">0 - 3</div>
                    <div className="py-4">VFO Chelsea</div>
                  </div>
                  <div className="grid grid-cols-5 text-center border-t border-gray-700">
                    <div className="py-4">14/04/24 20:30</div>
                    <div className="py-4 flex justify-center items-center">
                      <TrophyIcon className="mr-2" />
                      VFO City
                    </div>
                    <div className="py-4 bg-[#18181B] text-white">4 - 8</div>
                    <div className="py-4">VFO Real Madrid</div>
                  </div>
                  <div className="grid grid-cols-5 text-center border-t border-gray-700">
                    <div className="py-4">14/04/24 20:30</div>
                    <div className="py-4 flex justify-center items-center">
                      <TrophyIcon className="mr-2" />
                      VFO Everton
                    </div>
                    <div className="py-4 bg-[#18181B] text-white">1 - 0</div>
                    <div className="py-4">VFO Sassuolo</div>
                  </div>
                  <div className="grid grid-cols-5 text-center border-t border-gray-700">
                    <div className="py-4">14/04/24 20:30</div>
                    <div className="py-4 flex justify-center items-center">
                      <TrophyIcon className="mr-2" />
                      VFO Juventus
                    </div>
                    <div className="py-4 bg-[#18181B] text-white">
                      1 - 4 (HT 1-1)
                    </div>
                    <div className="py-4">VFO Arsenal</div>
                  </div>
                  <div className="grid grid-cols-5 text-center border-t border-gray-700">
                    <div className="py-4">14/04/24 20:30</div>
                    <div className="py-4 flex justify-center items-center">
                      <TrophyIcon className="mr-2" />
                      VFO Tottenham Hotspurs
                    </div>
                    <div className="py-4 bg-[#18181B] text-white">1 - 3</div>
                    <div className="py-4">VFO Liverpool</div>
                  </div>
                  <div className="grid grid-cols-5 text-center border-t border-gray-700">
                    <div className="py-4">14/04/24 20:30</div>
                    <div className="py-4 flex justify-center items-center">
                      <TrophyIcon className="mr-2" />
                      VFO United
                    </div>
                    <div className="py-4 bg-[#18181B] text-white">
                      2 - 2 (Pens 3-4)
                    </div>
                    <div className="py-4">VFO Bolton Wanderers</div>
                  </div>
                  <div className="grid grid-cols-5 text-center border-t border-gray-700">
                    <div className="py-4">14/04/24 20:30</div>
                    <div className="py-4 flex justify-center items-center">
                      <TrophyIcon className="mr-2" />
                      VFO Wolves
                    </div>
                    <div className="py-4 bg-[#18181B] text-white">4 - 1</div>
                    <div className="py-4">VFO Cardiff</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
      <footer className="bg-[#18181b] px-5 py-5 text-white text-center">
        &copy; 2024 | Virtual Football Demo
      </footer>
    </>
  );
}





function AwardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}


function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}

function MessageSquareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}


function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function TrophyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}