import React from 'react'
import CountrySelector from "@src/components/CountrySelector";
import { CountryDataList } from './mockData.ts'

export default () => {
    return <CountrySelector dataSource={CountryDataList} />
}