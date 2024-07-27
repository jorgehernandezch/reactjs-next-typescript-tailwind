import { colors } from '@/styles/colors'
import Pagination from '@mui/material/Pagination'

interface TemplateAppProps {
  header: JSX.Element
  table: JSX.Element
}

export const TemplateApp = ({ header, table }: TemplateAppProps) => {
  return (
    <div className="h-full flex flex-col">
      <div className="h-auto">{header}</div>
      <div className="flex-1 border-b-2 border-b-gray-300">{table}</div>
      <div className="flex justify-center items-center h-14">
        <Pagination
          count={5}
          sx={{
            '& .MuiPaginationItem-root': {
              color: colors.blue[500],
              border: `1px solid ${colors.blue[500]}`,
              margin: '0 5px',
              '&.Mui-selected': {
                backgroundColor: colors.blue[500],
                color: 'white',
              },
              '&:hover': {
                border: `1px solid ${colors.blue[500]}`,
                backgroundColor: colors.blue[500],
                color: 'white',
              },
            },
          }}
        />
      </div>
    </div>
  )
}
