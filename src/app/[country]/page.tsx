import CountryPageClient from "@/components/CountryPageClient"

interface PageProps {
  params: {
    country: string
  }
}

export default function Page({ params }: PageProps) {
  return <CountryPageClient country={params.country} />
}
