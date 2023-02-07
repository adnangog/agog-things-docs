import React from 'react'
import Select, { SelectProps } from '../select'
import '../styles/pager.css'

export default function Pager({ totalCount, page, countPerPage, onSelect }: { totalCount: number; page: number; countPerPage: number; onSelect({ page, countPerPage }: { page: number; countPerPage: number; }): void }) {

    let visiblePageCount = 5;
    const totalPage = Math.round(totalCount / countPerPage);
    visiblePageCount = visiblePageCount > totalPage ? totalPage : visiblePageCount
    let startFrom = visiblePageCount > page ? 0 : page - Math.round(visiblePageCount / 2)
    const maxStart = totalPage - visiblePageCount
    startFrom = startFrom > maxStart ? maxStart : startFrom

    const ddlPerPage: SelectProps = {
        value: countPerPage,
        placeholder: '--Lütfen Seçin--',
        onSelect: (value: number) => {
            onSelect({ page, countPerPage: value ?? countPerPage })
        },
        items: [
            { label: '5 / page', value: 5 },
            { label: '10 / page', value: 10 },
            { label: '25 / page', value: 25 },
            { label: '50 / page', value: 50 },
            { label: '100 / page', value: 100 },
        ],
        type: 'mini',
        style: { alignSelf: 'flex-end', justifySelf: 'flex-end' },
    }


    return (
        <div className='pager'>
            {startFrom > 0 && (
                <>
                    <button className={`pager-item`} onClick={() => onSelect({ page: 1, countPerPage })}>
                        1
                    </button>
                    <button
                        className={`pager-item`}
                        onClick={() => onSelect({ page: page - visiblePageCount > 0 ? page - visiblePageCount : 1, countPerPage })}
                    >
                        ...
                    </button>
                </>
            )}
            {Array.from({ length: visiblePageCount }, (_, i) => startFrom + i + 1).map((item) => (
                <button
                    disabled={item === page}
                    key={`pager-item${item}`}
                    className={item === page ? `pager-item active` : `pager-item`}
                    onClick={() => onSelect({ page: item, countPerPage })}
                >
                    {item}
                </button>
            ))}
            {totalPage + Math.round(visiblePageCount / 2) - 5 > page && (
                <>
                    <button
                        className={`pager-item`}
                        onClick={() =>
                            onSelect({ page: page + visiblePageCount < totalPage ? page + visiblePageCount : totalPage, countPerPage })
                        }
                    >
                        ...
                    </button>
                    <button className={`pager-item`} onClick={() => onSelect({ page: totalPage, countPerPage })}>
                        {totalPage}
                    </button>
                </>
            )}
            <Select {...ddlPerPage} />
        </div>
    )
}