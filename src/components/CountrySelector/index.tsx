import React, { useState } from 'react'
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from '@src/shadcn/components/ui/button.tsx'
import { cn } from "@src/shadcn/lib/utils"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@src/shadcn/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@src/shadcn/components/ui/popover"
import "/node_modules/flag-icons/css/flag-icons.min.css";

import { useMediaQuery } from '@src/shadcn/hooks/use-media-query.tsx'
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@src/shadcn/components/ui/drawer"
import { CountryDataListType } from '@src/pages/CountryListPage/type'


interface PropsType {
    dataSource: CountryDataListType[];
}

export default (props: PropsType) => {
    const [open, setOpen] = useState<boolean>(false)
    const [value, setValue] = useState<string>("")
    const isLg = useMediaQuery("(min-width: 768px)")
    const { dataSource } = props
    
    return isLg ?
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[500px] justify-between"
                >
                    {value
                        ? dataSource.find((item) => item.countryName === value)?.countryName
                        : "Select framework..."}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[500px] p-0">
                <Command>
                    <CommandInput placeholder="Search framework..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {dataSource.map((item) => (
                                <CommandItem
                                    key={item.countryName}
                                    value={item.countryName}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <span className={`fi fi-${item.abbreviation?.toLowerCase()}`} />
                                    {item.countryName}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === item.countryName ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    <span>{`+${item.calling_code}`}</span>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
        :
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[100vw] justify-between"
                >
                    {value
                        ? dataSource.find((item) => item.countryName === value)?.countryName
                        : "Select framework..."}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <VisuallyHidden.Root>
                        <DrawerTitle />
                        <DrawerDescription />
                    </VisuallyHidden.Root>
                </DrawerHeader>
                <div className="w-full">
                    <Command>
                        <CommandInput placeholder="Search Country..." className="h-9" />
                        <CommandList className={'max-h-[600px] h-600px'}>
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup>
                                {dataSource.map((item) => (
                                    <CommandItem
                                        key={item.countryName}
                                        value={item.countryName}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        <span className={`fi fi-${item.abbreviation?.toLowerCase()}`} />
                                        {item.countryName}
                                        <Check
                                            className={cn(
                                                "ml-auto",
                                                value === item.countryName ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        <span>{`+${item.calling_code}`}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                        <div className='flex-1' />
                    </Command>
                </div>
            </DrawerContent>
        </Drawer>
    
}






