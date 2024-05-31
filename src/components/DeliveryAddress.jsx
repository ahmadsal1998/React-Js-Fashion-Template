const DeliveryAddress = () => {
  return (
    <div className="py-5 bg-white rounded shadow-xl border border-border p-5">
      <h3 className="font-poppins font-semibold text-lg text-content pb-4">
        Delivery Address
      </h3>
      <div className="flex flex-col gap-5">
        <span className="font-poppins font-semibold text-base text-content">
          John Doe
        </span>
        <span className="font-poppins font-normal text-base text-content">
          1220 Shivalik shilp, Sg highway, Iskcon Cross Rd, Ahmedabad, Gujarat
          380058
        </span>
        <span className="font-poppins font-normal text-base text-content">
          +911112223334
        </span>
      </div>
    </div>
  )
}

export default DeliveryAddress
