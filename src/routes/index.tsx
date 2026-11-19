import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
const LOGO = "/3bs-logo.png";
const MAIL = "https://mail.google.com/mail/?view=cm&fs=1&to=3bs.desain@gmail.com&su=Konsultasi%20gambar%20teknik%20SolidWorks&body=Halo%203BS%20Design%2C%20saya%20mau%20tanya%20soal%20jasa%20gambar%20teknik.";

const WA = "6282135000237";
const wa = (t: string) => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const rp = (n: number) => "Rp" + n.toLocaleString("id-ID");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "3BS Design – Jasa Gambar Teknik SolidWorks" },
      { name: "description", content: "Jasa desain 3D, gambar teknik 2D, render & animasi SolidWorks. Pricelist transparan, konsultasi gratis via WhatsApp." },
      { property: "og:title", content: "3BS Design – Jasa Gambar Teknik SolidWorks" },
      { property: "og:description", content: "Desain 3D, 2D, render & animasi SolidWorks. Konsultasi gratis via WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [["tentang", "Tentang"], ["layanan", "Layanan"], ["portofolio", "Portofolio"], ["pricelist", "Pricelist"], ["keunggulan", "Keunggulan"], ["testimoni", "Testimoni"], ["kontak", "Kontak"]];

function H({ children, big }: { children: React.ReactNode; big?: boolean }) {
  return <div className="sec-head"><h2 className={`uppercase ${big ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"} font-normal`}>{children}</h2></div>;
}
function Row({ a, b }: { a: string; b: React.ReactNode }) {
  return <div className="flex justify-between gap-4 border-b border-border py-2.5 text-sm md:text-lg"><span className="uppercase">{a}</span><span className="whitespace-nowrap font-normal">{b}</span></div>;
}
function Grid({ head, rows }: { head: string[]; rows: (string | undefined)[][] }) {
  const cols = { gridTemplateColumns: `repeat(${head.length}, minmax(0,1fr))` };
  return (
    <div className="text-sm md:text-lg">
      <div className="grid border-b border-border py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground" style={cols}>{head.map((h, i) => <span key={h} className={i ? "text-right" : ""}>{h}</span>)}</div>
      {rows.map((r) => <div key={String(r[0])} className="grid border-b border-border py-2.5" style={cols}>{r.map((c, i) => <span key={i} className={i ? "text-right" : "uppercase"}>{c}</span>)}</div>)}
    </div>
  );
}
const Note = ({ t }: { t: string }) => <p className="mt-2 text-sm italic text-muted-foreground">{t}</p>;
const Sub = ({ t }: { t: string }) => <h4 className="mb-2 mt-7 text-sm font-medium uppercase tracking-wide">{t}</h4>;

const services = [
  ["Desain 3D SolidWorks", "Pemodelan solid 3D yang akurat dan detail untuk komponen mesin, produk industri, maupun purwarupa. Siap untuk simulasi maupun manufaktur.", "SolidWorks 3D"],
  ["Gambar teknik 2D", "Gambar kerja 2D lengkap dengan proyeksi, toleransi, dan notasi teknik sesuai standar ISO/ANSI. Siap cetak dan siap produksi.", "Drawing 2D"],
  ["Render & animasi Visualize", "Render foto-realistik dan animasi peragaan desain menggunakan SolidWorks Visualize. Cocok untuk presentasi produk, katalog, dan pitching klien.", "SW Visualize"],
  ["Animasi simulasi cara kerja", "Visualisasi gerak komponen, mekanisme, dan alur kerja alat atau mesin pada desain 3D. Cocok untuk presentasi teknis, tender, dan pelatihan operasional.", "Motion Simulation"],
];
const portfolio = [
  ["Gearbox Reducer", "Assembly 3D · 42 part", "3D"],
  ["Mesin Pencacah Plastik", "Animasi cara kerja · 30 detik", "ANIM"],
  ["Bracket Mounting", "Gambar kerja 2D · ISO", "2D"],
  ["Konveyor Belt Mini", "Render Visualize · 4K", "HD"],
  ["Jig & Fixture Las", "Desain 3D + drawing", "3D"],
  ["Pompa Sentrifugal", "Simulasi gerak · 60 detik", "SIM"],
];
const testimonials = [
  ["Rizky A.", "Mahasiswa Teknik Mesin", "Gambar 2D untuk tugas akhir saya rapi banget dan sesuai standar. Revisinya juga cepat ditanggapi."],
  ["CV Maju Teknik", "Workshop fabrikasi", "Animasi cara kerja mesinnya sangat membantu presentasi ke klien. Hasil detail dan tepat waktu."],
  ["Dimas P.", "Product designer", "Model 3D-nya presisi, langsung bisa dipakai untuk produksi. Harga sangat masuk akal."],
];
const durations = [[10, 20000], [30, 50000], [60, 100000]] as const;
const grades = [["Standard", 1], ["Medium", 2], ["Detail", 3]] as const;
const speeds = [["Normal (≥3 hari)", 0], ["Express (2 hari)", 0.1], ["Urgent (1 hari)", 0.2], ["Super Urgent (<1 hari)", 0.5]] as const;

function Calculator() {
  const [d, setD] = useState(0); const [g, setG] = useState(0); const [s, setS] = useState(0);
  const base = durations[d]![1] * grades[g]![1];
  const total = Math.round(base * (1 + speeds[s]![1]));
  const Pick = ({ items, v, set }: { items: readonly (readonly [string | number, number])[]; v: number; set: (n: number) => void }) => (
    <div className="flex flex-wrap gap-2">{items.map((it, i) => (
      <button key={i} onClick={() => set(i)} className={`border px-3 py-1.5 text-xs uppercase tracking-wider transition ${v === i ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"}`}>{typeof it[0] === "number" ? `≤ ${it[0]} detik` : it[0]}</button>
    ))}</div>
  );
  return (
    <div className="mt-10 border-[1.5px] border-foreground p-5 md:p-8">
      <h4 className="text-sm font-medium uppercase tracking-widest">Kalkulator estimasi animasi</h4>
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        <div><p className="mb-2 text-xs text-muted-foreground">Durasi</p><Pick items={durations} v={d} set={setD} /></div>
        <div><p className="mb-2 text-xs text-muted-foreground">Kualitas</p><Pick items={grades} v={g} set={setG} /></div>
        <div><p className="mb-2 text-xs text-muted-foreground">Deadline</p><Pick items={speeds} v={s} set={setS} /></div>
      </div>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-border pt-5">
        <div><p className="text-xs uppercase text-muted-foreground">Estimasi total</p><p className="font-display text-4xl">{rp(total)}</p></div>
        <a className="btn-solid" target="_blank" rel="noopener" href={wa(`Halo 3BS Design, saya mau order animasi ≤${durations[d]![0]} detik, kualitas ${grades[g]![0]}, deadline ${speeds[s]![0]}. Estimasi ${rp(total)}.`)}>Order via WhatsApp →</a>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="relative mx-auto max-w-6xl px-5 md:pl-24 md:pr-10">
      <div aria-hidden className="absolute bottom-0 right-3 top-0 w-[1.5px] bg-line md:right-6" />
      <header className="sticky top-0 z-20 flex items-center justify-between gap-4 bg-background/95 py-3.5 pr-6 backdrop-blur">
        <a href="#top" aria-label="3BS Design" className="bg-background p-1"><img src={LOGO} alt="3BS Design" className="h-8 w-auto" /></a>
        <nav className="flex gap-5 md:gap-6">{nav.map(([id, l]) => (
          <a key={id} href={`#${id}`} className={`text-xs font-medium uppercase tracking-widest underline-offset-4 hover:underline ${id === "kontak" ? "" : "hidden lg:inline"}`}>{l}</a>
        ))}</nav>
      </header>

      <main id="top" className="pr-8 md:pr-16">
        <section className="animate-rise pt-14 md:pt-28">
          <p className="mb-5 text-sm font-medium tracking-wide text-muted-foreground">Jasa gambar teknik · Tiga Bersinergi</p>
          <h1 className="mb-7 font-display text-5xl uppercase leading-[1.04] md:text-8xl">Solusi desain teknik terpercaya</h1>
          <p className="mb-8 max-w-xl text-base md:text-lg">3BS Design menyediakan jasa gambar teknik berbasis SolidWorks, dari desain 3D dan 2D hingga render animasi dan simulasi cara kerja alat untuk peragaan desain Anda.</p>
          <div className="flex flex-wrap gap-3"><a className="btn-solid" href="#pricelist">Lihat pricelist</a><a className="btn-line" href="#kontak">Konsultasi gratis</a></div>
          <div className="mt-12 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
            {[["3D", "Desain solid 3D"], ["2D", "Gambar teknik 2D"], ["HD", "Render animasi"], ["SW", "SolidWorks expert"]].map(([k, v]) => (
              <div key={k} className="bg-background p-5"><b className="font-display text-3xl font-normal">{k}</b><p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</p></div>
            ))}
          </div>
        </section>

        <section id="tentang" className="pt-20 md:pt-28">
          <H>Tentang kami</H>
          <div className="grid gap-8 md:grid-cols-2">
            <div><h4 className="mb-2 text-xl uppercase">Visi</h4><p className="text-muted-foreground">Menjadi mitra desain teknik terdepan yang dapat dipercaya di Indonesia, dengan solusi gambar teknik yang presisi, inovatif, dan sesuai standar.</p></div>
            <div><h4 className="mb-2 text-xl uppercase">Misi</h4><p className="text-muted-foreground">Menyediakan jasa gambar teknik berbasis SolidWorks yang akurat, mengutamakan kepuasan klien melalui hasil berkualitas, pengerjaan tepat waktu, dan komunikasi yang transparan di setiap proyek.</p></div>
          </div>
        </section>

        <section id="layanan" className="pt-20 md:pt-28">
          <H>Layanan</H>
          {services.map(([t, d, tag], i) => (
            <div key={t} className="flex justify-between gap-6 border-b border-border py-5 last:border-0">
              <div className="flex gap-5"><span className="font-display text-muted-foreground">0{i + 1}</span><div><h4 className="mb-1 text-lg uppercase md:text-xl">{t}</h4><p className="max-w-xl text-muted-foreground">{d}</p></div></div>
              <span className="hidden whitespace-nowrap text-xs font-medium uppercase tracking-wider text-muted-foreground sm:block">{tag}</span>
            </div>
          ))}
        </section>

        <section id="portofolio" className="pt-20 md:pt-28">
          <H>Portofolio</H>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map(([t, d, k], i) => (
              <a key={t} href="https://www.tiktok.com/@3bs_design" target="_blank" rel="noopener" className="group relative flex aspect-[4/3] flex-col justify-between bg-background p-5 transition hover:bg-foreground hover:text-background">
                <div className="flex justify-between text-xs text-muted-foreground group-hover:text-background"><span>#{String(i + 1).padStart(2, "0")}</span><span className="tracking-widest">{k}</span></div>
                <div className="font-display text-6xl opacity-10">{k}</div>
                <div><h4 className="text-lg uppercase">{t}</h4><p className="text-sm text-muted-foreground group-hover:text-background">{d}</p></div>
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Lihat video hasil karya lengkap di TikTok <a className="underline" href="https://www.tiktok.com/@3bs_design" target="_blank" rel="noopener">@3bs_design</a>.</p>
        </section>

        <section id="pricelist" className="pt-20 md:pt-28">
          <h2 className="mb-12 font-display text-5xl uppercase md:text-8xl">Price list</h2>
          <div className="space-y-16">
            <div><H>3D Modeling</H>{[["Part Created (Custom) – Simple", "Rp5.000 / part"], ["Part Created (Custom) – Medium", "Rp10.000 / part"], ["Part Created (Custom) – Advance", "Rp20.000 / part"]].map(([a, b]) => <Row key={a} a={a!} b={b!} />)}</div>
            <div><H>Assembly</H>{[10, 20, 30, 40, 50].map((n) => <Row key={n} a={`≤ ${n} Part`} b={rp(n * 1000)} />)}<Note t="Lebih dari 50 part dikenakan tambahan Rp10.000 setiap kelipatan 10 part." /></div>
            <div><H>2D Drawing (CAD)</H><Row a="2D Drawing" b="Rp5.000 / sheet" /></div>
            <div>
              <H>Animation</H>
              <Sub t="A. Harga berdasarkan durasi" />
              {durations.map(([s, p]) => <Row key={s} a={`≤ ${s} Detik`} b={rp(p)} />)}
              <Note t="Durasi lebih dari 60 detik dikenakan tambahan Rp10.000 setiap kelipatan 5 detik." />
              <Sub t="B. Kualitas video" />
              <Grid head={["Kualitas", "Resolusi", "Grade"]} rows={[["Standard", "360p • 60 FPS", "1"], ["Medium", "1080p • 60 FPS", "2"], ["Detail", "4K • 60 FPS", "3"]]} />
              <Sub t="C. Rumus perhitungan" />
              <p className="text-base uppercase md:text-xl">Harga Animasi = Harga Durasi × Grade Kualitas Video</p>
              <Sub t="D. Contoh perhitungan harga" />
              <Grid head={["Durasi", "Standard", "Medium", "Detail"]} rows={durations.map(([s, p]) => [`${s} Detik`, rp(p), rp(p * 2), rp(p * 3)])} />
              <Calculator />
            </div>
            <div><H>Deadline / Express Service</H>
              <Grid head={["Jenis layanan", "Waktu", "Biaya tambahan"]} rows={[["Normal", "≥ 3 Hari", "FREE"], ["Express", "2 Hari", "+10%"], ["Urgent", "1 Hari", "+20%"], ["Super Urgent", "< 1 Hari", "+50%"]]} />
              <Note t="Biaya tambahan deadline dihitung dari total harga akhir pekerjaan." />
            </div>
            <div><H>Terms & Conditions</H>
              <ul className="space-y-2">{["Revisi minor dapat dikomunikasikan terlebih dahulu.", "Format file hasil desain dapat disesuaikan dengan kebutuhan pelanggan.", "Deadline dimulai setelah spesifikasi dan referensi desain lengkap diterima.", "Layanan Express, Urgent, dan Super Urgent bergantung pada ketersediaan jadwal.", "Perubahan desain dari pelanggan dapat memengaruhi estimasi waktu pengerjaan.", "Untuk informasi lebih lanjut, segera hubungi admin agar mendapatkan penjelasan lebih jelas."].map((t) => (
                <li key={t} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />{t}</li>
              ))}</ul>
            </div>
          </div>
        </section>

        <section id="keunggulan" className="pt-20 md:pt-28">
          <H>Keunggulan</H>
          <div className="grid gap-8 md:grid-cols-2">{[["Presisi tinggi", "Setiap gambar dikerjakan dengan ketelitian dimensi dan toleransi sesuai kebutuhan produksi."], ["Pengerjaan cepat", "Setiap proyek selesai tepat waktu tanpa mengorbankan kualitas hasil."], ["SolidWorks expert", "Dikerjakan langsung oleh praktisi berpengalaman yang menguasai SolidWorks secara mendalam."], ["Revisi terbuka", "Ruang diskusi dan revisi tersedia hingga hasil sesuai kebutuhan dan ekspektasi Anda."]].map(([t, d]) => (
            <div key={t}><h4 className="mb-1 text-lg uppercase">{t}</h4><p className="text-muted-foreground">{d}</p></div>
          ))}</div>
        </section>

        <section id="testimoni" className="pt-20 md:pt-28">
          <H>Testimoni</H>
          <div className="grid gap-6 md:grid-cols-3">{testimonials.map(([n, r, q]) => (
            <figure key={n} className="border-l-[1.5px] border-foreground pl-5">
              <blockquote className="font-display text-lg leading-snug">“{q}”</blockquote>
              <figcaption className="mt-4 text-sm"><b className="font-medium">{n}</b><span className="block text-muted-foreground">{r}</span></figcaption>
            </figure>
          ))}</div>
        </section>

        <section id="kontak" className="pt-20 md:pt-28">
          <H>Mulai proyek Anda</H>
          <p className="mb-8 max-w-xl text-lg">Konsultasikan kebutuhan gambar teknik Anda bersama kami, gratis tanpa komitmen. Pemesanan & pembayaran dilakukan langsung via WhatsApp.</p>
          <div className="flex flex-wrap gap-3">
            <a className="btn-solid" href={wa("Halo 3BS Design, saya mau konsultasi gambar teknik.")} target="_blank" rel="noopener">WhatsApp</a>
            <a className="btn-line" href="https://www.tiktok.com/@3bs_design" target="_blank" rel="noopener">TikTok</a>
            <a className="btn-line" href={MAIL} target="_blank" rel="noopener noreferrer">Email</a>
          </div>
          <div className="mt-8"><Row a="WhatsApp" b="0821 3500 0237" /><Row a="TikTok" b="@3bs_design" /><Row a="Email" b={<a className="underline" href={MAIL} target="_blank" rel="noopener noreferrer">3bs.desain@gmail.com</a>} /></div>
        </section>
      </main>

      <footer className="flex flex-col items-end gap-2 pb-16 pr-8 pt-24 text-right md:pr-16">
        <img src={LOGO} alt="3BS Design" className="h-11 w-auto" />
        <p className="text-sm italic text-muted-foreground">From Ideas to 3D Models.</p>
        <p className="text-sm text-muted-foreground">© 2026 3BS Design (Tiga Bersinergi)</p>
      </footer>

      <a href={wa("Halo 3BS Design, saya mau tanya-tanya.")} target="_blank" rel="noopener" aria-label="Chat WhatsApp" className="btn-solid fixed bottom-5 right-8 z-30 shadow-lg">Chat WA</a>
    </div>
  );
}
