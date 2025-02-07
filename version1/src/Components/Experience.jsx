
export function Experience({Company="Rablo Learning Pvt. Lmt.", Date="July 2024 - October 2024", Position="UI/UX Design Intern", Address="Lucknow, U.P.", JobLoc="Remote"}){
    return (
        <>
        
        <div  className="flex justify-between items-center border-b pb-3 rvv ">
      {/* Left Side */}
      <div className="text-left">
        <div className="text-primary font-medium text-4xl font-primary">
          {Company}
        </div>
        <p className="text-gray-500 text-2xl font-secondary">{Address}</p>
      </div>

      {/* Right Side */}
      <div className="text-right">
        <p className="text-3xl font-semibold font-primary ">{Position}</p>
        <p className="text-gray-500 text-xl font-secondary">{Date}</p>
      </div>

      {/* Remote Badge */}
      <div className="bg-black text-white text-sm px-4 py-2 rounded-full flex items-center font-secondary">
        <span className="mr-1">•</span> {JobLoc}
      </div>
    </div>
        </>
    )
}