import AwardBox from "../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2024-2025";

export default async function StudentAwards({ params }) {
    const { lng } = await params;
    const { t } = await translation(lng, "awards");
    const { t:courseT } = await translation(lng, "course");
    return (
        <div className="flex justify-center items-center text-center w-full flex-col gap-2 md:text-base/8 sm:text-sm/8 text-xs">
            <Trans i18nKey="summer" t={t} values={{ period: period }} components={[<span key="0" className="font-bold text-3xl/8" />]} />
            <AwardBox
                lang={lng}
                topic={courseT("tma")}
                outstandingNameList={["Fong Cheuk Hey 方卓熹", "Leung Chi Yan 梁智仁"]}
                outstandingSchoolList={["S6, Queen's College", "HKBU Affiliated School Wong Kam Fai Sec. & Primary School"]}
                excellentNameList={["Chan Jin Yin 陳靖言", "Guan Hui 管汇", "He Rui Han 賀睿涵"]}
                excellentSchoolList={["S4, Queen's College", "S1, Singapore International School (Hong Kong)", "S4, NTHYK Yuen Long District Secondary School"]}
                hardwork={40}
            />
            <AwardBox
                lang={lng}
                topic={courseT("cnag")}
                outstandingNameList={["Lam Tsz Ho 林梓皓"]}
                outstandingSchoolList={["S6, Pui Kiu Middle School"]}
                excellentNameList={["Hui Wai Chun 許偉俊", "Wu Hon Yung 胡瀚庸", "Yip Ngai Hin 葉毅軒"]}
                excellentSchoolList={["S4, SPHRC Kung Yik She Secondary School", "S6, Sha Tin Government Secondary School", "S6, United Christian College"]}
                hardwork={19}
            />
            <AwardBox
                lang={lng}
                topic={courseT("idm")}
                outstandingNameList={["Mark Tsz Hin 麥梓軒"]}
                outstandingSchoolList={["S4, Munsang College (Hong Kong Island)"]}
                excellentNameList={["Tse Ka Chun Jason 謝珈晉"]}
                excellentSchoolList={["S5, Baptist Lui Ming Choi Secondary School"]}
                hardwork={21}
            />
            <AwardBox
                lang={lng}
                topic={courseT("ntc")}
                outstandingNameList={["Ng Ka Tsun 吳嘉浚", "Wong Tsz Hin 黃梓軒"]}
                outstandingSchoolList={["S1, SKH Tsang Shiu Tim Secondary School", "Diocesan Boys' School Primary Division"]}
                excellentNameList={["Leung Chi Yan 梁智仁"]}
                excellentSchoolList={["HKBU Affiliated School Wong Kam Fai Sec. & Primary School"]}
                hardwork={27}
            />
            <AwardBox
                lang={lng}
                topic={courseT("tdg")}
                outstandingNameList={["Chow Chung To 周仲稻", "Ngai Sui Lun 倪瑞倫"]}
                outstandingSchoolList={["S5, Valtorta College", "S5, Shung Tak Catholic English College"]}
                excellentNameList={["Chan Lap Chee 陳立之", "Zhang Yuk Yiu 張鈺瑤", "Zheng Kai Yang 鄭開陽"]}
                excellentSchoolList={["HKBU Affiliated School Wong Kam Fai Sec. & Primary School", "S6, True Light Girls' College", "S4, Baptist Lui Ming Choi Secondary School"]}
                hardwork={52}
            />
        </div>
    );
}