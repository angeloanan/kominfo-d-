import Link from 'next/link'

export const ExplanationSection = () => {
  return (
    <section className='mt-8'>
      <h2 className='text-2xl font-semibold'>Bagaimana cara kerja situs ini?</h2>

      <p className='mt-2 max-w-prose'>
        Website ini mengambil data dari situs{' '}
        <Link href='https://pse.kominfo.go.id' passHref>
          <a className='text-blue-800 underline'>PSE Kominfo</a>
        </Link>{' '}
        dan mencocokan url services dengan link yang ada di database kami. Data situs ini akan
        secara otomatis diperbaharui setiap 1 jam (
        <Link
          href='https://github.com/angeloanan/kominfo-d-/actions/workflows/refresh-data.yml'
          passHref
        >
          <a className='text-blue-800 underline'>lihat status updatenya disini</a>
        </Link>
        ).
      </p>

      <p className='mt-4 max-w-prose'>
        Setiap situs yang match dengan database kami akan menampilkan status &quot;
        <em>Registered</em>
        &quot;. Jika tidak, maka akan menampilkan status &quot;<em>BLOCKED</em>&quot;, sesuai dengan{' '}
        <Link
          href='https://peraturan.bpk.go.id/Home/Details/203049/permenkominfo-no-5-tahun-2020'
          passHref
        >
          <a className='text-blue-800 underline'>Permenkominfo 5/2020</a>
        </Link>{' '}
        Bab II Bagian ketiga Pasal 7 Nomor 2.
      </p>

      <p className='mt-4 max-w-prose'>
        Pemilik situs akan mencoba untuk menyajikan data yang terbaru dan terakurat. Jika ada
        masalah, dimohon untuk mengontak saya melalui link di footer!
      </p>

      <p className='mt-4 max-w-prose'>
        Ingin berkontribusi?{' '}
        <Link href='https://github.com/angeloanan/kominfo-d-' passHref>
          <a className='text-blue-800 underline'>Kunjungi repositori kodenya di Github!</a>
        </Link>
      </p>
    </section>
  )
}
