
// ==================================================
// BUKU CERITA DIGITAL INTERAKTIF
// KISAH ARNAB DAN KURA-KURA
// ==================================================


// ==================================================
// 1. DATA CERITA
// ==================================================

const cerita = [
    {
        gambar: "images/page1.png",
        audio: "audio/page1.mp3",
        teks: [
            "Arnab dan kura-kura tinggal di dalam hutan.",
            "Arnab sangat pantas berlari."
        ]
    },
    {
        gambar: "images/page2.png",
        audio: "audio/page2.mp3",
        teks: [
            "Arnab bangga dengan kecekapannya.",
            "Arnab suka menunjuk-nunjuk kepada haiwan lain."
        ]
    },
    {
        gambar: "images/page3.png",
        audio: "audio/page3.mp3",
        teks: [
            "Arnab mengejek kura-kura yang berjalan perlahan.",
            "Kura-kura berasa sedih mendengar ejekan arnab."
        ]
    },
    {
        gambar: "images/page4.png",
        audio: "audio/page4.mp3",
        teks: [
            "Kura-kura mencabar arnab untuk berlumba.",
            "Arnab menerima cabaran kura-kura."
        ]
    },
    {
        gambar: "images/page5.png",
        audio: "audio/page5.mp3",
        teks: [
            "Semua haiwan berkumpul di garisan permulaan.",
            "Arnab dan kura-kura bersedia untuk berlumba."
        ]
    },
    {
        gambar: "images/page6.png",
        audio: "audio/page6.mp3",
        teks: [
            "Arnab berlari dengan sangat pantas.",
            "Kura-kura berjalan perlahan di belakang arnab."
        ]
    },
    {
        gambar: "images/page7.png",
        audio: "audio/page7.mp3",
        teks: [
            "Arnab berhenti di bawah sebatang pokok.",
            "Arnab berehat kerana terlalu yakin akan menang."
        ]
    },
    {
        gambar: "images/page8.png",
        audio: "audio/page8.mp3",
        teks: [
            "Kura-kura terus berjalan tanpa berhenti.",
            "Kura-kura berusaha untuk mencapai garisan penamat."
        ]
    },
    {
        gambar: "images/page9.png",
        audio: "audio/page9.mp3",
        teks: [
            "Arnab tertidur di bawah pokok.",
            "Kura-kura semakin hampir dengan garisan penamat."
        ]
    },
    {
        gambar: "images/page10.png",
        audio: "audio/page10.mp3",
        teks: [
            "Kura-kura tiba di garisan penamat.",
            "Semua haiwan bersorak gembira."
        ]
    },
    {
        gambar: "images/page11.png",
        audio: "audio/page11.mp3",
        teks: [
            "Arnab terjaga daripada tidurnya.",
            "Arnab berasa sedih kerana kalah dalam perlumbaan."
        ]
    },
    {
        gambar: "images/page12.png",
        audio: "audio/page12.mp3",
        teks: [
            "Arnab sedar akan kesilapannya.",
            "Arnab belajar untuk tidak memandang rendah terhadap orang lain."
        ]
    },
    {
        gambar: "images/pengajaran.png",
        audio: "audio/pengajaran.mp3",
        teks: [
            "Kita tidak boleh bersikap sombong.",
            "Kita tidak boleh mudah berputus asa."
        ],
        pengajaran: true
    }
];


// ==================================================
// 2. ELEMEN HTML
// ==================================================

const cover = document.getElementById("cover");
const halamanCerita = document.getElementById("halaman-cerita");

const nomborHalaman = document.getElementById("nombor-halaman");
const gambarCerita = document.getElementById("gambar-cerita");
const teksCerita = document.getElementById("teks-cerita");

const butangMula = document.getElementById("btn-mula");
const butangSebelum = document.getElementById("btn-sebelum");
const butangSeterusnya = document.getElementById("btn-seterusnya");
const butangBacaSemula = document.getElementById("btn-baca-semula");

const pemainAudio = document.getElementById("audio-cerita");

let halamanSemasa = 0;


// ==================================================
// 3. AUDIO PERKATAAN
// ==================================================

const audioPerkataan = {
    "arnab": "audio/arnab.mp3",
    "dan": "audio/dan.mp3",
    "kura-kura": "audio/kura-kura.mp3",
    "tinggal": "audio/tinggal.mp3",
    "di": "audio/di.mp3",
    "dalam": "audio/dalam.mp3",
    "hutan": "audio/hutan.mp3",

    "sangat": "audio/sangat.mp3",
    "pantas": "audio/pantas.mp3",
    "berlari": "audio/berlari.mp3",

    "bangga": "audio/bangga.mp3",
    "dengan": "audio/dengan.mp3",
    "kecekapannya": "audio/kecekapannya.mp3",
    "suka": "audio/suka.mp3",
    "menunjuk-nunjuk": "audio/menunjuk-nunjuk.mp3",
    "kepada": "audio/kepada.mp3",
    "haiwan": "audio/haiwan.mp3",
    "lain": "audio/lain.mp3",

    "mengejek": "audio/mengejek.mp3",
    "yang": "audio/yang.mp3",
    "berjalan": "audio/berjalan.mp3",
    "perlahan": "audio/perlahan.mp3",
    "berasa": "audio/berasa.mp3",
    "sedih": "audio/sedih.mp3",
    "mendengar": "audio/mendengar.mp3",
    "ejekan": "audio/ejekan.mp3",

    "mencabar": "audio/mencabar.mp3",
    "untuk": "audio/untuk.mp3",
    "berlumba": "audio/berlumba.mp3",
    "menerima": "audio/menerima.mp3",
    "cabaran": "audio/cabaran.mp3",

    "semua": "audio/semua.mp3",
    "berkumpul": "audio/berkumpul.mp3",
    "garisan": "audio/garisan.mp3",
    "permulaan": "audio/permulaan.mp3",
    "bersedia": "audio/bersedia.mp3",

    "belakang": "audio/belakang.mp3",

    "berhenti": "audio/berhenti.mp3",
    "bawah": "audio/bawah.mp3",
    "sebatang": "audio/sebatang.mp3",
    "pokok": "audio/pokok.mp3",
    "berehat": "audio/berehat.mp3",
    "kerana": "audio/kerana.mp3",
    "terlalu": "audio/terlalu.mp3",
    "yakin": "audio/yakin.mp3",
    "akan": "audio/akan.mp3",
    "menang": "audio/menang.mp3",

    "terus": "audio/terus.mp3",
    "tanpa": "audio/tanpa.mp3",
    "berusaha": "audio/berusaha.mp3",
    "mencapai": "audio/mencapai.mp3",
    "penamat": "audio/penamat.mp3",

    "tertidur": "audio/tertidur.mp3",
    "semakin": "audio/semakin.mp3",
    "hampir": "audio/hampir.mp3",

    "tiba": "audio/tiba.mp3",
    "bersorak": "audio/bersorak.mp3",
    "gembira": "audio/gembira.mp3",

    "terjaga": "audio/terjaga.mp3",
    "daripada": "audio/daripada.mp3",
    "tidurnya": "audio/tidurnya.mp3",
    "kalah": "audio/kalah.mp3",
    "perlumbaan": "audio/perlumbaan.mp3",

    "sedar": "audio/sedar.mp3",
    "kesilapannya": "audio/kesilapannya.mp3",
    "belajar": "audio/belajar.mp3",
    "tidak": "audio/tidak.mp3",
    "memandang": "audio/memandang.mp3",
    "rendah": "audio/rendah.mp3",
    "terhadap": "audio/terhadap.mp3",
    "orang": "audio/orang.mp3",

    "kita": "audio/kita.mp3",
    "boleh": "audio/boleh.mp3",
    "bersikap": "audio/bersikap.mp3",
    "sombong": "audio/sombong.mp3",
    "mudah": "audio/mudah.mp3",
    "berputus": "audio/berputus.mp3",
    "asa": "audio/asa.mp3"
};


// ==================================================
// 4. SUKU KATA
// ==================================================

const sukuKataKhas = {
    "arnab": ["ar", "nab"],
    "kura-kura": ["ku", "ra", "ku", "ra"],
    "dan": ["dan"],
    "tinggal": ["ting", "gal"],
    "di": ["di"],
    "dalam": ["da", "lam"],
    "hutan": ["hu", "tan"],

    "sangat": ["sa", "ngat"],
    "pantas": ["pan", "tas"],
    "berlari": ["ber", "la", "ri"],

    "bangga": ["bang", "ga"],
    "dengan": ["de", "ngan"],
    "kecekapannya": ["ke", "ce", "ka", "pan", "nya"],
    "suka": ["su", "ka"],
    "kepada": ["ke", "pa", "da"],
    "haiwan": ["hai", "wan"],
    "lain": ["la", "in"],

    "mengejek": ["me", "nge", "jek"],
    "yang": ["yang"],
    "berjalan": ["ber", "ja", "lan"],
    "perlahan": ["per", "la", "han"],
    "berasa": ["be", "ra", "sa"],
    "sedih": ["se", "dih"],
    "mendengar": ["men", "de", "ngar"],
    "ejekan": ["e", "je", "kan"],

    "mencabar": ["men", "ca", "bar"],
    "untuk": ["un", "tuk"],
    "berlumba": ["ber", "lum", "ba"],
    "menerima": ["me", "ne", "ri", "ma"],
    "cabaran": ["ca", "ba", "ran"],

    "semua": ["se", "mu", "a"],
    "berkumpul": ["ber", "kum", "pul"],
    "garisan": ["ga", "ri", "san"],
    "permulaan": ["per", "mu", "la", "an"],
    "bersedia": ["ber", "se", "di", "a"],

    "belakang": ["be", "la", "kang"],

    "berhenti": ["ber", "hen", "ti"],
    "bawah": ["ba", "wah"],
    "sebatang": ["se", "ba", "tang"],
    "pokok": ["po", "kok"],
    "berehat": ["be", "re", "hat"],
    "kerana": ["ke", "ra", "na"],
    "terlalu": ["ter", "la", "lu"],
    "yakin": ["ya", "kin"],
    "akan": ["a", "kan"],
    "menang": ["me", "nang"],

    "terus": ["te", "rus"],
    "tanpa": ["tan", "pa"],
    "berusaha": ["ber", "u", "sa", "ha"],
    "mencapai": ["men", "ca", "pai"],
    "penamat": ["pe", "na", "mat"],

    "tertidur": ["ter", "ti", "dur"],
    "semakin": ["se", "ma", "kin"],
    "hampir": ["ham", "pir"],

    "tiba": ["ti", "ba"],
    "bersorak": ["ber", "so", "rak"],
    "gembira": ["gem", "bi", "ra"],

    "terjaga": ["ter", "ja", "ga"],
    "daripada": ["da", "ri", "pa", "da"],
    "tidurnya": ["ti", "dur", "nya"],
    "kalah": ["ka", "lah"],
    "perlumbaan": ["per", "lum", "ba", "an"],

    "sedar": ["se", "dar"],
    "kesilapannya": ["ke", "si", "la", "pan", "nya"],
    "belajar": ["be", "la", "jar"],
    "tidak": ["ti", "dak"],
    "memandang": ["me", "man", "dang"],
    "rendah": ["ren", "dah"],
    "terhadap": ["ter", "ha", "dap"],
    "orang": ["o", "rang"],

    "kita": ["ki", "ta"],
    "boleh": ["bo", "leh"],
    "bersikap": ["ber", "si", "kap"],
    "sombong": ["som", "bong"],
    "mudah": ["mu", "dah"],
    "berputus": ["ber", "pu", "tus"],
    "asa": ["a", "sa"]
};


// ==================================================
// 5. FUNGSI AUDIO
// ==================================================

function hentikanAudio() {
    if (!pemainAudio) return;

    pemainAudio.pause();

    try {
        pemainAudio.currentTime = 0;
    } catch (ralat) {
        // Abaikan jika audio belum bersedia.
    }
}


function mainAudio(laluan) {
    if (!pemainAudio || !laluan) return;

    hentikanAudio();

    pemainAudio.src = laluan;
    pemainAudio.load();

    pemainAudio.play().catch((ralat) => {
        console.warn("Audio gagal dimainkan:", laluan, ralat);
    });
}


// ==================================================
// 6. AUDIO COVER
// ==================================================

function mainAudioCover() {
    if (cover.hidden) return;

    mainAudio("audio/coversatu.mp3");
}

window.addEventListener("load", () => {
    mainAudioCover();
});

cover.addEventListener("click", (event) => {
    if (event.target.closest("#btn-mula")) return;

    if (pemainAudio.paused) {
        mainAudioCover();
    }
});


// ==================================================
// 7. AUDIO PERKATAAN
// ==================================================

function mainAudioPerkataan(perkataan) {
    const nama = perkataan
        .toLowerCase()
        .replace(/^[^a-z]+|[^a-z-]+$/g, "");

    const laluan = audioPerkataan[nama];

    if (!laluan) {
        hentikanAudio();
        console.warn("Audio perkataan belum didaftarkan:", nama);
        return;
    }

    mainAudio(laluan);
}


// ==================================================
// 8. PAPAR PERKATAAN DENGAN WARNA SUKU KATA
// ==================================================

function paparPerkataan(teks, hurufBesar = false) {
    const bekas = document.createElement("span");

    bekas.className = "perkataan";
    bekas.tabIndex = 0;
    bekas.setAttribute("role", "button");
    bekas.setAttribute("aria-label", `Dengar ${teks}`);

    const padanan = teks.match(
        /^([^a-z]*)([a-z]+(?:-[a-z]+)*)([^a-z]*)$/i
    );

    if (!padanan) {
        bekas.textContent = teks;
        return bekas;
    }

    const [, awal, perkataan, akhir] = padanan;
    const kecil = perkataan.toLowerCase();

    bekas.appendChild(document.createTextNode(awal));

    if (kecil === "menunjuk-nunjuk") {
        const susunan = [
            ["me", "hitam"],
            ["nun", "merah"],
            ["juk", "hitam"],
            ["-", "sempang"],
            ["nun", "merah"],
            ["juk", "hitam"]
        ];

        susunan.forEach(([suku, warna], indeks) => {
            if (warna === "sempang") {
                bekas.appendChild(document.createTextNode("-"));
                return;
            }

            const span = document.createElement("span");
            span.className = `suku-kata ${warna}`;

            let teksSuku = suku;

            if (hurufBesar && indeks === 0) {
                teksSuku =
                    teksSuku.charAt(0).toUpperCase() +
                    teksSuku.slice(1);
            }

            span.textContent = teksSuku;
            bekas.appendChild(span);
        });

    } else {
        const bahagian = kecil.split("-");
        let indeksWarna = 0;

        bahagian.forEach((kata, indeksBahagian) => {
            if (indeksBahagian > 0) {
                bekas.appendChild(document.createTextNode("-"));
            }

            const sukuKata = sukuKataKhas[kata] || [kata];

            sukuKata.forEach((suku) => {
                const span = document.createElement("span");

                span.className =
                    "suku-kata " +
                    (indeksWarna % 2 === 0 ? "hitam" : "merah");

                let teksSuku = suku;

                if (hurufBesar && indeksWarna === 0) {
                    teksSuku =
                        teksSuku.charAt(0).toUpperCase() +
                        teksSuku.slice(1);
                }

                span.textContent = teksSuku;
                bekas.appendChild(span);

                indeksWarna++;
            });
        });
    }

    bekas.appendChild(document.createTextNode(akhir));

    bekas.addEventListener("click", (event) => {
        event.stopPropagation();
        mainAudioPerkataan(perkataan);
    });

    bekas.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            event.stopPropagation();
            mainAudioPerkataan(perkataan);
        }
    });

    return bekas;
}


// ==================================================
// 9. AUDIO HALAMAN
// ==================================================

function mainAudioHalaman() {
    const data = cerita[halamanSemasa];

    if (data && data.audio) {
        mainAudio(data.audio);
    }
}


// ==================================================
// 10. PAPAR HALAMAN
// ==================================================

function paparHalaman() {
    hentikanAudio();

    const data = cerita[halamanSemasa];

    if (!data) return;

    nomborHalaman.textContent = data.pengajaran
        ? "Pengajaran"
        : `Halaman ${halamanSemasa + 1}`;

    nomborHalaman.classList.toggle(
        "pengajaran",
        Boolean(data.pengajaran)
    );

    gambarCerita.src = data.gambar;

    gambarCerita.alt = data.pengajaran
        ? "Ilustrasi pengajaran cerita Arnab dan Kura-Kura"
        : `Ilustrasi halaman ${halamanSemasa + 1} cerita Arnab dan Kura-Kura`;

    teksCerita.replaceChildren();

    teksCerita.classList.toggle(
        "pengajaran",
        Boolean(data.pengajaran)
    );

    data.teks.forEach((ayat, indeksAyat) => {
        const perenggan = document.createElement("p");
        perenggan.className = "ayat";

        if (data.pengajaran) {
            perenggan.classList.add("ayat-pengajaran");
            perenggan.classList.add(
                indeksAyat === 0 ? "kiri" : "kanan"
            );
        }

        const perkataan = ayat.split(/\s+/);

        perkataan.forEach((item, indeks) => {
            perenggan.appendChild(
                paparPerkataan(item, indeks === 0)
            );

            if (indeks < perkataan.length - 1) {
                perenggan.appendChild(document.createTextNode(" "));
            }
        });

        teksCerita.appendChild(perenggan);
    });

    kemasKiniButangNavigasi();
    mainAudioHalaman();
}


// ==================================================
// 11. NAVIGASI
// ==================================================

function kemasKiniButangNavigasi() {
    const halamanTerakhir = halamanSemasa === cerita.length - 1;

    if (halamanTerakhir) {
        butangSeterusnya.textContent = "🏠";
        butangSeterusnya.setAttribute(
            "aria-label",
            "Kembali ke Halaman Utama"
        );
        butangSeterusnya.title = "Kembali ke Halaman Utama";
        butangSeterusnya.classList.add("butang-halaman-utama");

    } else {
        butangSeterusnya.textContent = "❯";
        butangSeterusnya.setAttribute(
            "aria-label",
            "Halaman seterusnya"
        );
        butangSeterusnya.title = "Halaman seterusnya";
        butangSeterusnya.classList.remove("butang-halaman-utama");
    }

    butangSebelum.disabled = false;

    if (halamanSemasa === 0) {
        butangSebelum.setAttribute(
            "aria-label",
            "Kembali ke muka depan"
        );
        butangSebelum.title = "Kembali ke muka depan";

    } else {
        butangSebelum.setAttribute(
            "aria-label",
            "Halaman sebelumnya"
        );
        butangSebelum.title = "Halaman sebelumnya";
    }
}


// ==================================================
// 12. BUTANG MULA MEMBACA
// ==================================================

butangMula.addEventListener("click", () => {
    hentikanAudio();

    halamanSemasa = 0;
    cover.hidden = true;
    halamanCerita.hidden = false;

    paparHalaman();
});


// ==================================================
// 13. HALAMAN SEBELUMNYA
// ==================================================

butangSebelum.addEventListener("click", () => {
    hentikanAudio();

    if (halamanSemasa > 0) {
        halamanSemasa--;
        paparHalaman();

    } else {
        kembaliKeMukaDepan();
    }
});


// ==================================================
// 14. HALAMAN SETERUSNYA
// ==================================================

butangSeterusnya.addEventListener("click", () => {
    hentikanAudio();

    if (halamanSemasa < cerita.length - 1) {
        halamanSemasa++;
        paparHalaman();

    } else {
        kembaliKeMukaDepan();
    }
});


// ==================================================
// 15. KEMBALI KE MUKA DEPAN
// ==================================================

function kembaliKeMukaDepan() {
    hentikanAudio();

    halamanCerita.hidden = true;
    cover.hidden = false;

    mainAudioCover();
}


// ==================================================
// 16. BACA SEMULA AUDIO HALAMAN
// ==================================================

butangBacaSemula.addEventListener("click", (event) => {
    event.stopPropagation();
    mainAudioHalaman();
});


// ==================================================
// 17. KLIK KAWASAN KOSONG UNTUK HENTIKAN AUDIO
// ==================================================

halamanCerita.addEventListener("click", (event) => {
    if (event.target.closest(".perkataan")) return;

    if (
        event.target.closest(".butang-navigasi") ||
        event.target.closest("#btn-baca-semula") ||
        event.target.closest("#btn-fullscreen")
    ) {
        return;
    }

    hentikanAudio();
});


// ==================================================
// 18. KEADAAN AWAL
// ==================================================

cover.hidden = false;
halamanCerita.hidden = true;

kemasKiniButangNavigasi();


// ==================================================
// 19. FULL SCREEN - TELEFON SAHAJA
// ==================================================

const butangFullScreen = document.getElementById("btn-fullscreen");

function perantiTelefon() {
    return window.matchMedia("(max-width: 600px)").matches;
}


function kemasKiniButangFullScreen() {
    if (!butangFullScreen) return;

    const sedangFullScreen =
        Boolean(document.fullscreenElement) ||
        document.documentElement.classList.contains("mobile-pseudo-fullscreen");

    butangFullScreen.textContent = sedangFullScreen
        ? "✕ Keluar Full screen"
        : "⛶ Full screen";

    butangFullScreen.setAttribute(
        "aria-label",
        sedangFullScreen
            ? "Keluar daripada skrin penuh"
            : "Aktifkan paparan skrin penuh"
    );

    butangFullScreen.setAttribute(
        "aria-pressed",
        String(sedangFullScreen)
    );
}


async function aktifkanFullScreen() {
    if (!perantiTelefon()) return;

    const akar = document.documentElement;

    const sedangFullScreen =
        Boolean(document.fullscreenElement) ||
        akar.classList.contains("mobile-pseudo-fullscreen");

    try {
        if (sedangFullScreen) {

            if (document.fullscreenElement && document.exitFullscreen) {
                await document.exitFullscreen();
            }

            akar.classList.remove("mobile-pseudo-fullscreen");

            if (
                screen.orientation &&
                typeof screen.orientation.unlock === "function"
            ) {
                screen.orientation.unlock();
            }

        } else {

            if (akar.requestFullscreen) {
                await akar.requestFullscreen();
            } else {
                akar.classList.add("mobile-pseudo-fullscreen");
            }

            if (
                screen.orientation &&
                typeof screen.orientation.lock === "function"
            ) {
                try {
                    await screen.orientation.lock("landscape");
                } catch (ralatOrientasi) {
                    console.info(
                        "Orientasi landscape tidak disokong oleh browser ini."
                    );
                }
            }
        }

    } catch (ralat) {

        akar.classList.toggle("mobile-pseudo-fullscreen");

        console.info(
            "Menggunakan paparan penuh alternatif untuk peranti ini."
        );
    }

    kemasKiniButangFullScreen();
}


if (butangFullScreen) {
    butangFullScreen.addEventListener(
        "click",
        aktifkanFullScreen
    );
}


document.addEventListener(
    "fullscreenchange",
    kemasKiniButangFullScreen
);


document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {

        document.documentElement.classList.remove(
            "mobile-pseudo-fullscreen"
        );

        if (
            screen.orientation &&
            typeof screen.orientation.unlock === "function"
        ) {
            screen.orientation.unlock();
        }

        kemasKiniButangFullScreen();
    }
});


window.addEventListener("resize", kemasKiniButangFullScreen);

window.addEventListener(
    "orientationchange",
    kemasKiniButangFullScreen
);


// ==================================================
// TAMAT SCRIPT.JS
// ==================================================
