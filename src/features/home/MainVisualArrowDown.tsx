export const MainVisualArrowDown: React.FC = () => {
  return (
    <div className="relative w-2">
      <div className="arrow absolute inset-y-0 right-0 inline-block w-10 p-0 text-primary text-xs align-middle"/>
      <div className="down absolute top-[-53px] left-[-25px] w-60 h-1 bg-primary transform rotate-90"/>
      <div className="absolute left-0.5 w-6 h-6 border-t border-r border-primary transform rotate-135"/>
    </div>
  )
}