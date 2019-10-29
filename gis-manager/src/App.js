import React, { useState } from 'react'
import AppContent from './components/AppContent'
import { SearchInput } from './components/SearchInput'
import './App.css'
import { Checkbox, RadioGroup } from '@dhis2/ui-core'

const MyApp = () => {
    const [search, setSearch] = useState(null)
    const [filter, setFilter] = useState('all')

    return <div className="container">
        <h3>Organisation Units</h3>
        <div className="controls">
            <SearchInput onChange={setSearch} />
            <RadioGroup disabled={search} options={[{
                label: 'All',
                value: 'all',
            }, {
                label: 'No Geometry',
                value: 'invalid'
            }]}
                value={filter}
                onChange={e => setFilter(e.target.value)} />
        </div>
        <AppContent search={search} filter={filter} />
    </div>
}

export default MyApp
