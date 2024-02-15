import Image from "next/image"

const ServiceCard = ({ item }) => {
    return (
        <>
            <div className="bg-blue-100 flex justify-center gap-4 max-w-[400px] py-10 px-5 rounded-md border-2 border-solid border-white shadow-2xl max-sm:px-3 mx-4 overflow-auto">
                <div>
                    <Image
                        src={item?.icon}
                        alt="web development"
                        className=" min-w-8 max-w-18"
                    />
                </div>
                <div>
                    <h1 className="text-blue-900 font-[900] text-xl mb-2 whitespace-nowrap max-sm:text-base">{item?.title}</h1>
                    <p className="font-medium max-sm:text-sm capitalize">{item?.description}</p>
                </div>
            </div>
        </>
    )
}

export default ServiceCard