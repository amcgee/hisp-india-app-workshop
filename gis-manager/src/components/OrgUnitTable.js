import React from 'react'
import { Table, TableRowHead, TableCellHead, TableHead, TableBody, TableRow, TableCell, Button } from '@dhis2/ui-core'

export const OrgUnitTable = ({ orgUnits }) => {
    return <Table>
        <TableHead>
            <TableRowHead>
                <TableCellHead>
                    UID
                </TableCellHead>
                <TableCellHead>
                    Name
                </TableCellHead>
                <TableCellHead>
                    Level
                </TableCellHead>
                <TableCellHead>

                </TableCellHead>
            </TableRowHead>
        </TableHead>
        <TableBody>
            {orgUnits.map(function (orgUnit) {
                return <TableRow>
                    <TableCell>
                        {orgUnit.id}
                    </TableCell>
                    <TableCell>
                        {orgUnit.displayName}
                    </TableCell>
                    <TableCell>
                        {orgUnit.level}
                    </TableCell>
                    <TableCell>
                        <Button>Edit</Button>
                    </TableCell>
                </TableRow>
            })}
        </TableBody>
    </Table>
}