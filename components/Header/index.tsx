import { Fragment, useState } from "react";
import { Popover, Transition, Listbox } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import styles from "./Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { locales, Locale } from "../../constants/locales";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(
    locales.find((locale) => locale.value == i18n.language) || locales[0]
  );

  const paths = [
    { name: t("navLinks.home"), path: "/" },
    { name: t("navLinks.services"), path: "/services" },
    { name: t("navLinks.contact"), path: "/contact" },
    { name: t("navLinks.careers"), path: "/careers" },
    { name: t("navLinks.about"), path: "/about" },
  ];

  const onChangeLocale = (newLocale: Locale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, router.asPath, {
      locale: newLocale.value,
    });
    setSelected(newLocale);
  };

  return (
    <Popover className="fixed z-10 w-full top-0 h-25 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start items-center lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="flex justify-start items-center">
                <img className="h-8 w-auto sm:h-10" src="/logo.webp" alt="" />
                <h1>
                  <b className={styles.logo_color_orange}>MY</b>
                  <b className={styles.logo_color_blue}>SOL</b>
                </h1>
              </a>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-3 md:flex">
            {paths.map((url, i) => (
              <Link key={i} href={url.path}>
                <a
                  className={
                    (router.pathname == url.path
                      ? "bg-gray-200"
                      : "hover:bg-gray-200") +
                    " p-2 text-base font-medium text-gray-900"
                  }
                >
                  {url.name}
                </a>
              </Link>
            ))}
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1">
            <Listbox
              value={selected}
              onChange={(changedLocale) => onChangeLocale(changedLocale)}
            >
              {({ open }) => (
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                    <span className="flex items-center">{selected.icon}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {locales.map((locale, i) => (
                        <Listbox.Option
                          key={i}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "text-white bg-indigo-600"
                                : "text-gray-900",
                              "relative cursor-default select-none py-2 pl-3 pr-9"
                            )
                          }
                          value={locale}
                        >
                          {({ selected, active }) => (
                            <>
                              {locale.icon}

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              )}
            </Listbox>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="flex justify-start items-center">
                  <img className="h-8 w-auto sm:h-10" src="/logo.webp" alt="" />
                  <h1>
                    <b className={styles.logo_color_orange}>MY</b>
                    <b className={styles.logo_color_blue}>SOL</b>
                  </h1>
                </div>
                <div className="flex items-center">
                  <Listbox
                    value={selected}
                    onChange={(changedLocale) => onChangeLocale(changedLocale)}
                  >
                    {({ open }) => (
                      <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                          <span className="flex items-center">
                            {selected.icon}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {locales.map((locale, i) => (
                              <Listbox.Option
                                key={i}
                                className={({ active }) =>
                                  classNames(
                                    active
                                      ? "text-white bg-indigo-600"
                                      : "text-gray-900",
                                    "relative cursor-default select-none py-2 pl-3 pr-9"
                                  )
                                }
                                value={locale}
                              >
                                {({ selected, active }) => (
                                  <>
                                    {locale.icon}

                                    {selected ? (
                                      <span
                                        className={classNames(
                                          active
                                            ? "text-white"
                                            : "text-indigo-600",
                                          "absolute inset-y-0 right-0 flex items-center pr-4"
                                        )}
                                      >
                                        <CheckIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    )}
                  </Listbox>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {paths.map((url, i) => (
                    <Link key={i} href={url.path}>
                      <a
                        className={
                          (router.pathname == url.path ? "bg-gray-200" : "") +
                          " -m-3 flex items-center rounded-md p-3 hover:bg-gray-300"
                        }
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {url.name}
                        </span>
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
