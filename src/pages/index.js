import Head from 'next/head'
import DefaultLayout from "../components/Layout/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout title="Home">
      <section className="w-full bg-top bg-cover overflow-hidden bg-blue-200 lightBlueGradient">
        <div className="flex items-center w-full">
          <div className="flex flex-col items-center justify-around container mx-auto mt-40 mb-16">
            <h1>Hi, I’m Georgi. Nice to meet you!</h1>
            <p className="text-center text-gray-200">I am a developer who is enthusiastic about finding solutions and performance optimization.</p>
          </div>
        </div>
         Home Page
      </section>
    </DefaultLayout>
  )
}
