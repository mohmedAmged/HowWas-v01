import CountryPageClient from "@/components/CountryPageClient"



export default function Page({ params }: { params: { country: string } }) {
  return <CountryPageClient country={params.country} />
}