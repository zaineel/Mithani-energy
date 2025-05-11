import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Sun,
  Zap,
  Leaf,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      {/* Navigation */}
      <header className='sticky top-0 z-50 bg-white shadow-sm'>
        <nav className='container mx-auto flex items-center justify-between py-4 px-4 md:px-6'>
          <div className='flex items-center space-x-2'>
            <Sun className='h-6 w-6 text-green-600' />
            <span className='text-2xl font-bold text-green-600'>
              Mithani Energy
            </span>
          </div>
          <div className='space-x-6'>
            <Link href='/' className='text-gray-600 hover:text-green-600'>
              Home
            </Link>
            <Link
              href='#learn-more'
              className='text-gray-600 hover:text-green-600'>
              Benefits
            </Link>
            <Link
              href='#products'
              className='text-gray-600 hover:text-green-600'>
              Products
            </Link>
            <Link
              href='#process'
              className='text-gray-600 hover:text-green-600'>
              Process
            </Link>
            <Link
              href='#book-consultation'
              className='text-gray-600 hover:text-green-600'>
              Book Consultation
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className='relative bg-gradient-to-b from-green-50 to-white py-20 lg:py-32'>
        <div className='container px-4 md:px-6'>
          <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16'>
            <div className='flex flex-col justify-center space-y-4'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                  Power Your Home With{" "}
                  <span className='text-green-600'>Clean Solar Energy</span>
                </h1>
                <p className='max-w-[600px] text-gray-500 md:text-xl'>
                  Harness the power of the sun with Mithani Energy's premium
                  solar solutions. Save money, reduce your carbon footprint, and
                  invest in a sustainable future.
                </p>
              </div>
              <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                <Link href='#book-consultation'>
                  <Button className='bg-green-600 hover:bg-green-700'>
                    Book a Free Consultation{" "}
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </Button>
                </Link>
                <Link href='#learn-more'>
                  <Button variant='outline'>Learn More</Button>
                </Link>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <Image
                src='/solar-hero.png'
                width={550}
                height={550}
                alt='Solar panels on a modern home roof'
                className='rounded-lg object-cover'
                priority
              />
            </div>
          </div>
        </div>
        <div className='absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white'></div>
      </section>

      {/* Benefits Section */}
      <section id='learn-more' className='py-16 lg:py-24'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <div className='inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700'>
                Why Choose Solar?
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Benefits of Going Solar
              </h2>
              <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Switching to solar energy offers numerous advantages for your
                home, wallet, and the planet.
              </p>
            </div>
          </div>
          <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12'>
            <div className='flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm'>
              <div className='rounded-full bg-green-100 p-3'>
                <Zap className='h-6 w-6 text-green-600' />
              </div>
              <h3 className='text-xl font-bold'>Reduce Energy Bills</h3>
              <p className='text-center text-gray-500'>
                Save up to 70% on your electricity bills by generating your own
                clean energy from the sun.
              </p>
            </div>
            <div className='flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm'>
              <div className='rounded-full bg-green-100 p-3'>
                <Leaf className='h-6 w-6 text-green-600' />
              </div>
              <h3 className='text-xl font-bold'>Eco-Friendly</h3>
              <p className='text-center text-gray-500'>
                Reduce your carbon footprint and contribute to a cleaner, more
                sustainable environment.
              </p>
            </div>
            <div className='flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm'>
              <div className='rounded-full bg-green-100 p-3'>
                <Sun className='h-6 w-6 text-green-600' />
              </div>
              <h3 className='text-xl font-bold'>Energy Independence</h3>
              <p className='text-center text-gray-500'>
                Protect yourself from rising utility costs and gain energy
                independence for your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id='products' className='bg-gray-50 py-16 lg:py-24'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <div className='inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700'>
                Our Solutions
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Premium Solar Products
              </h2>
              <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Explore our range of high-quality solar panels and complete
                energy solutions.
              </p>
            </div>
          </div>
          <div className='mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2'>
            <div className='group relative overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md'>
              <Image
                src='/solar-residential.png'
                width={600}
                height={400}
                alt='Residential solar panel installation'
                className='aspect-video w-full object-cover transition-transform group-hover:scale-105'
              />
              <div className='p-6'>
                <h3 className='text-2xl font-bold'>Residential Solar</h3>
                <p className='mt-2 text-gray-500'>
                  Custom-designed solar systems for homes of all sizes. Maximize
                  your energy production and savings.
                </p>
                <ul className='mt-4 space-y-2'>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-5 w-5 text-green-600' />
                    <span>High-efficiency panels</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-5 w-5 text-green-600' />
                    <span>Battery storage options</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-5 w-5 text-green-600' />
                    <span>25-year warranty</span>
                  </li>
                </ul>
                <Link href='#book-consultation' className='mt-6 inline-block'>
                  <Button>Book a Consultation</Button>
                </Link>
              </div>
            </div>
            <div className='group relative overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md'>
              <Image
                src='/solar-commercial.png'
                width={600}
                height={400}
                alt='Commercial solar installation'
                className='aspect-video w-full object-cover transition-transform group-hover:scale-105'
              />
              <div className='p-6'>
                <h3 className='text-2xl font-bold'>Commercial Solar</h3>
                <p className='mt-2 text-gray-500'>
                  Scalable solar solutions for businesses, reducing operational
                  costs and enhancing sustainability.
                </p>
                <ul className='mt-4 space-y-2'>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-5 w-5 text-green-600' />
                    <span>Custom system design</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-5 w-5 text-green-600' />
                    <span>Financing options available</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='mr-2 h-5 w-5 text-green-600' />
                    <span>Monitoring & maintenance</span>
                  </li>
                </ul>
                <Link href='#book-consultation' className='mt-6 inline-block'>
                  <Button>Book a Consultation</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id='process' className='py-16 lg:py-24'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <div className='inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700'>
                How It Works
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Our Simple Process
              </h2>
              <p
                className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed

'>
                Going solar with Mithani Energy is easy. We handle everything
                from consultation to installation.
              </p>
            </div>
          </div>
          <div className='mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3'>
            <div className='relative flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm'>
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white'>
                1
              </div>
              <h3 className='text-xl font-bold'>Free Consultation</h3>
              <p className='text-center text-gray-500'>
                We assess your energy needs and design a custom solar solution
                for your property.
              </p>
            </div>
            <div className='relative flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm'>
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white'>
                2
              </div>
              <h3 className='text-xl font-bold'>Professional Installation</h3>
              <p className='text-center text-gray-500'>
                Our certified technicians handle the entire installation process
                with minimal disruption.
              </p>
            </div>
            <div className='relative flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm'>
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white'>
                3
              </div>
              <h3 className='text-xl font-bold'>Start Saving</h3>
              <p className='text-center text-gray-500'>
                Begin generating clean energy and watch your electricity bills
                decrease immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='bg-gray-50 py-16 lg:py-24'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <div className='inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700'>
                Testimonials
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                What Our Customers Say
              </h2>
              <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Don't just take our word for it. Hear from homeowners who have
                made the switch to solar with Mithani Energy.
              </p>
            </div>
          </div>
          <div className='mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
            <div className='flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm'>
              <div>
                <div className='flex gap-0.5 text-yellow-400'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='h-5 w-5'>
                      <path
                        fillRule='evenodd'
                        d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                        clipRule='evenodd'
                      />
                    </svg>
                  ))}
                </div>
                <blockquote className='mt-4 border-l-4 border-green-600 pl-4 italic text-gray-600'>
                  "Installing solar panels with Mithani Energy was the best
                  decision we made for our home. Our electricity bills have been
                  reduced by over 60%, and the installation process was smooth
                  and professional."
                </blockquote>
              </div>
              <div className='mt-6 flex items-center'>
                <div className='h-10 w-10 rounded-full bg-gray-200'></div>
                <div className='ml-3'>
                  <p className='font-medium'>Sarah Johnson</p>
                  <p className='text-sm text-gray-500'>Homeowner</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm'>
              <div>
                <div className='flex gap-0.5 text-yellow-400'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='h-5 w-5'>
                      <path
                        fillRule='evenodd'
                        d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                        clipRule='evenodd'
                      />
                    </svg>
                  ))}
                </div>
                <blockquote className='mt-4 border-l-4 border-green-600 pl-4 italic text-gray-600'>
                  "As a business owner, I was looking for ways to reduce
                  operational costs and become more sustainable. Mithani Energy
                  delivered a custom commercial solar solution that exceeded our
                  expectations."
                </blockquote>
              </div>
              <div className='mt-6 flex items-center'>
                <div className='h-10 w-10 rounded-full bg-gray-200'></div>
                <div className='ml-3'>
                  <p className='font-medium'>Michael Chen</p>
                  <p className='text-sm text-gray-500'>Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-green-600 py-16 lg:py-24'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center text-white'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Ready to Harness the Power of the Sun?
              </h2>
              <p className='max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Join thousands of satisfied customers who have made the switch
                to clean, renewable solar energy.
              </p>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
              <Link href='#book-consultation'>
                <Button className='bg-white text-green-600 hover:bg-gray-100'>
                  Book a Free Consultation{" "}
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
              </Link>
              <Link href='#learn-more'>
                <Button
                  variant='outline'
                  className='border-white text-white hover:bg-green-700'>
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Book Consultation Section */}
      <section id='book-consultation' className='py-16 lg:py-24'>
        <div className='container px-4 md:px-6'>
          <div className='grid gap-6 lg:grid-cols-2 lg:gap-12'>
            <div className='flex flex-col justify-center space-y-4'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700'>
                  Book a Consultation
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Schedule Your Free Solar Consultation
                </h2>
                <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed'>
                  Ready to explore solar energy for your home or business? Book
                  a free consultation with our experts to get a personalized
                  quote and learn how you can save with solar.
                </p>
              </div>
              <div className='space-y-4'>
                <div className='flex items-start'>
                  <Phone className='mr-4 h-5 w-5 text-green-600' />
                  <div>
                    <h3 className='font-medium'>Phone</h3>
                    <p className='text-gray-500'>(214) 724-4818</p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <Mail className='mr-4 h-5 w-5 text-green-600' />
                  <div>
                    <h3 className='font-medium'>Email</h3>
                    <p className='text-gray-500'>info@mithanienergy.com</p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <MapPin className='mr-4 h-5 w-5 text-green-600' />
                  <div>
                    <h3 className='font-medium'>Address</h3>
                    <p className='text-gray-500'>
                      1001 Fuller Wiser Rd, Euless, TX 76039
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div
                data-cal-link='mithanienergy/free-consultation'
                data-cal-config='{"layout":"month_view"}'
                className='cal-embed'
                style={{ minHeight: "600px" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 py-12 text-white'>
        <div className='container px-4 md:px-6'>
          <div className='grid gap-8 lg:grid-cols-4'>
            <div className='space-y-4'>
              <div className='flex items-center space-x-2'>
                <Sun className='h-6 w-6 text-green-400' />
                <h3 className='text-xl font-bold'>Mithani Energy</h3>
              </div>
              <p className='text-gray-400'>
                Powering a sustainable future with clean, renewable solar energy
                solutions.
              </p>
              <div className='flex space-x-4'>
                <a href='#' className='text-gray-400 hover:text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-5 w-5'>
                    <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
                  </svg>
                  <span className='sr-only'>Facebook</span>
                </a>
                <a href='#' className='text-gray-400 hover:text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-5 w-5'>
                    <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
                  </svg>
                  <span className='sr-only'>Twitter</span>
                </a>
                <a href='#' className='text-gray-400 hover:text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-5 w-5'>
                    <rect
                      width='20'
                      height='20'
                      x='2'
                      y='2'
                      rx='5'
                      ry='5'></rect>
                    <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                    <line x1='17.5' x2='17.51' y1='6.5' y2='6.5'></line>
                  </svg>
                  <span className='sr-only'>Instagram</span>
                </a>
                <a href='#' className='text-gray-400 hover:text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-5 w-5'>
                    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                    <rect width='4' height='12' x='2' y='9'></rect>
                    <circle cx='4' cy='4' r='2'></circle>
                  </svg>
                  <span className='sr-only'>LinkedIn</span>
                </a>
              </div>
            </div>
            <div className='space-y-4'>
              <h3 className='text-lg font-medium'>Quick Links</h3>
              <nav className='flex flex-col space-y-2'>
                <Link href='/' className='text-gray-400 hover:text-white'>
                  Home
                </Link>
                <Link
                  href='#learn-more'
                  className='text-gray-400 hover:text-white'>
                  Benefits
                </Link>
                <Link
                  href='#products'
                  className='text-gray-400 hover:text-white'>
                  Products
                </Link>
                <Link
                  href='#process'
                  className='text-gray-400 hover:text-white'>
                  Process
                </Link>
                <Link
                  href='#book-consultation'
                  className='text-gray-400 hover:text-white'>
                  Book Consultation
                </Link>
              </nav>
            </div>
            <div className='space-y-4'>
              <h3 className='text-lg font-medium'>Services</h3>
              <nav className='flex flex-col space-y-2'>
                <Link href='#' className='text-gray-400 hover:text-white'>
                  Residential Solar
                </Link>
                <Link href='#' className='text-gray-400 hover:text-white'>
                  Commercial Solar
                </Link>
                <Link href='#' className='text-gray-400 hover:text-white'>
                  Solar Battery Storage
                </Link>
                <Link href='#' className='text-gray-400 hover:text-white'>
                  System Monitoring
                </Link>
                <Link href='#' className='text-gray-400 hover:text-white'>
                  Maintenance
                </Link>
              </nav>
            </div>
            <div className='space-y-4'>
              <h3 className='text-lg font-medium'>Newsletter</h3>
              <p className='text-gray-400'>
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <form className='flex space-x-2'>
                <input
                  type='email'
                  placeholder='Your email'
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-gray-900 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                />
                <Button className='bg-green-600 hover:bg-green-700'>
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className='mt-8 border-t border-gray-800 pt-8 text-center'>
            <p className='text-gray-400'>
              &copy; {new Date().getFullYear()} Mithani Energy. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
