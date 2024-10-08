'use client'

import Image from 'next/image'
import twitterIcon from "@/images/icons/twitter.svg";
import facebookIcon from "@/images/icons/facebook.svg";
import instagramIcon from "@/images/icons/instagram.svg";

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '@/images/logo.png'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

const sections = [
  { id: '', title: 'Home' },
  {
    id: 'about-us',
    title: (
      <>
        <span className="hidden lg:inline">About Us</span>
        <span className="lg:hidden">About</span>
      </>
    ),
  },
  {
    id: 'our-community', title: (
      <>
        <span className="hidden lg:inline">Our Community</span>
        <span className="lg:hidden">Community</span>
      </>
    ),
  },
  { id: 'events', title: 'Events' },
  { id: 'contact', title: 'Contact' },
]

export function Navbar() {
  let navBarRef = useRef<React.ElementRef<'div'>>(null)
  let [activeIndex, setActiveIndex] = useState<number | null>(null)
  let mobileActiveIndex = activeIndex === null ? 0 : activeIndex

  useEffect(() => {
    function updateActiveIndex() {
      if (!navBarRef.current) {
        return
      }

      let newActiveIndex = 0
      let elements = sections
        .map(({ id }) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)
      let bodyRect = document.body.getBoundingClientRect()
      let offset = bodyRect.top + navBarRef.current.offsetHeight + 1
      if (window.scrollY >= Math.floor(bodyRect.height) - window.innerHeight) {
        setActiveIndex(sections.length - 1)
        return
      }

      for (let index = 0; index < elements.length; index++) {
        if (
          window.scrollY >=
          elements[index].getBoundingClientRect().top - offset
        ) {
          newActiveIndex = index + 1
        } else {
          break
        }
      }
      setActiveIndex(newActiveIndex)
    }

    updateActiveIndex()

    window.addEventListener('resize', updateActiveIndex)
    window.addEventListener('scroll', updateActiveIndex, { passive: true })

    return () => {
      window.removeEventListener('resize', updateActiveIndex)
      window.removeEventListener('scroll', updateActiveIndex)
    }
  }, [])

  return (
    <Disclosure as="nav" className="sticky top-0 z-50" ref={navBarRef}>
      <div className="mx-auto px-2 sm:px-6 lg:px-8 border-b border-slate-200 bg-white/95 [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Image src={logo} alt="HSHB Logo" className='h-8 w-auto' />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {sections.map((section, sectionIndex) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={clsx(
                      sectionIndex === activeIndex
                        ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            <a href='https://www.instagram.com/eastbarnet_hellenic' target="_blank">
              <Image
                priority
                src={instagramIcon}
                height={28}
                width={28}
                alt="Follow us on Instagram"
              />
            </a>
            <a href='https://www.facebook.com/eastbarnetgreekschool/' target="_blank">
              <Image
                priority
                src={facebookIcon}
                height={28}
                width={28}
                alt="Like us on Facebook"
              />
            </a>
            <a href='https://twitter.com/HSHBInfo' target="_blank">
              <Image
                priority
                src={twitterIcon}
                height={28}
                width={28}
                alt="Follow us on Twitter"
              />
            </a>


            {/* <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button> */}


            {/* 
            <IconButton
                            color="primary"
                            aria-label="Facebook"
                            onClick={() => window.open()}
                        >
                            <FacebookIcon />
                        </IconButton>
                        <IconButton
                            color="primary"
                            aria-label="Instagram"
                            onClick={() => window.open('https://www.instagram.com/eastbarnet_hellenic/')}
                        >
                            <InstagramIcon />
                        </IconButton> */}



            {/* Profile dropdown */}
            {/* <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu> */}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden border-b border-slate-200 bg-white/95 [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {sections.map((section, sectionIndex) => (
            <DisclosureButton
              key={section.id}
              as="a"
              href={`#${section.id}`}
              className={clsx(
                sectionIndex === activeIndex
                  ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-sm font-medium',
              )}
            >
              {section.title}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
