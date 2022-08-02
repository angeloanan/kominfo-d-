import Link from 'next/link'

export const ExplanationSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold'>Bagaimana cara kerja situs ini?</h2>

      <p className='mt-2'>
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

      <p className='mt-4'>
        Setiap situs yang match dengan database kami akan menampilkan status &quot;
        <em>Registered</em>
        &quot;. Jika tidak, maka akan menampilkan status &quot;<em>Unregistered</em>&quot;. Sesuai
        dengan{' '}
        <Link
          href='https://peraturan.bpk.go.id/Home/Details/203049/permenkominfo-no-5-tahun-2020'
          passHref
        >
          <a className='text-blue-800 underline'>Permenkominfo 5/2020</a>
        </Link>{' '}
        Bab II Bagian ketiga Pasal 7 Nomor 2, Kominfo akan melakukan &quot;pemblokiran akses&quot;
        kepada services yang tidak terdaftar.
      </p>

      <p className='mt-4'>
        Selain itu, semua situs dibawah akan diperiksa status terblokirnya menggunakan jaringan
        IndiHome, Sigma (courtesy of{' '}
        <Link href='https://indi.wtf' passHref>
          <a className='text-blue-800 underline'>indi.wtf</a>
        </Link>{' '}
        by{' '}
        <Link href='https://twitter.com/fransallen' passHref>
          <a className='text-blue-800 underline'>Frans Allen</a>
        </Link>
        ) serta melalui pengecekan langsung ke sistem TrustPositif milik Kominfo yang digunakan
        untuk melakukan pemblokiran.
      </p>

      <p className='mt-4'>
        Jika situs tersebut diblokir dari jaringan IndiHome dan tidak terdaftar di situs PSE, maka
        status website akan berubah menjadi&nbsp;
        <em className='text-red-700'>BLOCKED</em>.
      </p>

      <p className='mt-4'>
        Situs yang terdaftar pada sistem TrustPositif juga akan memiliki keterangan{' '}
        <small>TP</small> yang menandakan bahwa website terdaftar pada database pemblokiran resmi
        miliki Kominfo.
      </p>

      <p className='mt-4 max-w-prose'>
        Pemilik situs akan berusaha untuk menyajikan data yang terbaru dan terakurat. Jika ada
        masalah, dimohon untuk mengontak saya melalui link di footer!
      </p>

      <p className='mt-4 max-w-prose'>
        P.S, menurut{' '}
        <Link
          href='https://tekno.kompas.com/read/2022/07/29/18150067/ini-sebab-google-indonesia-tidak-muncul-di-halaman-pse-kominfo-meski-sudah?page=all'
          passHref
        >
          <a className='text-blue-800 underline'>Kompas</a>
        </Link>{' '}
        dan{' '}
        <Link
          href='https://kumparan.com/kumparannews/kominfo-google-sudah-daftar-pse-secara-manual-1yYfG1DYqpl/full'
          passHref
        >
          <a className='text-blue-800 underline'>Kumparan</a>
        </Link>
        , semua service Google sudah terdaftar walau tidak muncul di situs PSE.
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
