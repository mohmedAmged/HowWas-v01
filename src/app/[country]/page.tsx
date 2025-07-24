import CountryPageClient from "@/components/CountryPageClient"



export default async function Page({ params }: { params: Promise<{ country: string }> }) {
  const {country} = (await params)
  return <CountryPageClient country={country} />
}