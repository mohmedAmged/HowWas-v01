export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl p-6 md:p-8 bg-[#121212] border border-[#2a2a2a] rounded-xl shadow-xl">
        {children}
      </div>
    </div>
  )
}
