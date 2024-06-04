import Image from "next/image"

export default function PaymentDone() {
  return (
    <section className="flex flex-col items-center justify-between">
      <article className="flex flex-col items-center justify-center w-[65%] md:w-[70%] shadow-md p-6 rounded-lg">
        <h1 className="p-4 md:p-6 text-2xl capitalize font-semibold text-center">thank you for donating</h1>
        <p className="text-gray-400 text-center">Your generous contribution will go a long way to make an impact</p>
        <Image src="https://img.freepik.com/premium-vector/thank-you-typography-premium-vector-design-quote-template_500351-519.jpg?w=740" alt="Thank you" width={250} height={250} className="mx-auto" />
        <p className="text-center text-gray-400">We appreciate your support in making a positive impact</p>
      </article>
    </section>
  )
}