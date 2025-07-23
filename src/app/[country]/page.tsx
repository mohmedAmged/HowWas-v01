import CountryPageClient from "@/components/CountryPageClient"

interface PageProps {
  params: {
    country: string
  }
}

export default function Page({ params }: { params: { country: string } }) {
  return <CountryPageClient country={params.country} />
}