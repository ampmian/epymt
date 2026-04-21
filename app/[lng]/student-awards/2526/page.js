import AwardBox from "../awardBox";
import { translation } from "@/app/i18n-index"
import { Trans } from "react-i18next/TransWithoutContext"
const period = "2025-2026";

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
                outstandingNameList={["Ng Ho Yin 吳浩然", "Liu Yinuo 劉一諾"]}
                outstandingSchoolList={["S4, SKH Tsang Shiu Tim Secondary School", "S2, Wong Shiu Chi Secondary School"]}
                excellentNameList={["Zhang Weixiang 張唯翔"]}
                excellentSchoolList={["S4, Tsuen Wan Government Secondary School"]}
            />
            <AwardBox
                lang={lng}
                topic={courseT("cnag")}
                outstandingNameList={["Chan Chun Hin Marcus 陳晉軒", "Wong Wing Laam 黃泳嵐"]}
                outstandingSchoolList={["S6, TWGHs Wong Fut Nam College", "S6, Good Hope School"]}
                excellentNameList={["Siu Chin Wa 蕭展華", "Ng Pak Yin 吳柏賢", "Zhou Ziqi 周子琪", "Lo To Shing 盧韜丞"]}
                excellentSchoolList={["S2, ELCHK Yuen Long Lutheran Secondary School", "S6, Hoi Ping Chamber of Commerce Secondary School", "S4, New Asia Middle School", "S3, SKH Lam Kau Mow Secondary School"]}
            />
            <AwardBox
                lang={lng}
                topic={courseT("idm")}
                outstandingNameList={["Zhang Yuk Yiu 張鈺瑤"]}
                outstandingSchoolList={["S6, True Light Girls' College"]}
                excellentNameList={["Ngai Sui Lun 倪瑞倫"]}
                excellentSchoolList={["S6, Shung Tak Catholic English College"]}
            />
            <AwardBox
                lang={lng}
                topic={courseT("ntc")}
                outstandingNameList={["Zhang Yuk Yiu 張鈺瑤", "Ng Ho Yin 吳浩然", "Ng Sze Chai 伍思齊"]}
                outstandingSchoolList={["S6, True Light Girls' College", "S4, SKH Tsang Shiu Tim Secondary School", "S4, STFA Lee Shau Kee College"]}
                excellentNameList={["Chan Wai Yin 陳偉賢", "Zhang Zhi Ling 張芷菱", "Lee Yik Lim 李亦鐮", "Hui Wang Chak 許泓澤", "Lau Cheuk Wai 劉卓為"]}
                excellentSchoolList={["S5, King Ling College", "S4, Yuen Long Public Secondary School", "S4, HKMA K S Lo College", "S4, Shatin Tsung Tsin Secondary School", "S2,Shatin Tsung Tsin Secondary School"]}
            />
            <AwardBox
                lang={lng}
                topic={courseT("tdg")}
                outstandingNameList={["Lai Hong Tung, Honrich 黎康同", "He Rui Han 賀睿涵"]}
                outstandingSchoolList={["S6, La Salle College", "S6, NTHYK Yuen Long District Secondary School"]}
                excellentNameList={["Wong Tsz Hin 黃梓軒"]}
                excellentSchoolList={["Diocesan Boys' School Primary Division"]}
            />
        </div>
    );
}