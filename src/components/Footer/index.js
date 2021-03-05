import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{t("Kontak")}</S.Language>
                <S.Large to="/">{t("Ada yang bisa kami bantu?")}</S.Large>
                <S.Para>
                  {t(
                    `Kami siap melayani. Kamu bisa kirim pertanyaan lewat email atau whatsapp kami.`
                  )}
                </S.Para>
                <a href="mailto:contact@setc.id">
                  <S.Chat>{t(`Email`)}</S.Chat>
                </a>
                <a href="mailto:contact@setc.id">
                  <S.Chat>{t(`Whatsapp`)}</S.Chat>
                </a>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t("Portal")}</S.Title>
                <S.LinkExt href="https://setc.id/" target="_blank" left="true">
                  {t("Website SETC")}
                </S.LinkExt>
                <S.Large left="true" to="/">
                  {t("E-Map SETC")}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Empty />
                <S.Large left="true" to="/">
                  {t("Support Center")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("Layanan UMKM")}
                </S.Large>
              </Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Empty />
                <S.Language>{t("Alamat")}</S.Language>
                <S.Para>Dusun Betiting,
                        Desa Gunting,
                        Kecamatan Sukorejo.
                </S.Para>
                <S.Para>Kabupaten Pasuruan</S.Para>
                <S.Para>Jawa Timur</S.Para>
                <S.Para>67161</S.Para>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t("Lainnya")}</S.Title>
                <S.LinkExt left="true" href="https://setc.id/umkm" target='_blank'>
                  {t("Produk UMKM")}
                </S.LinkExt>
                <S.LinkExt left="true" href="https://setc.id/cerita-setc" target='_blank'>
                  {t("Cerita UMKM")}
                </S.LinkExt>
                <S.LinkExt left="true" href="https://setc.id/pelatihan/pendaftaran-peserta">
                  {t("Pelatihan")}
                </S.LinkExt>
                <S.Large left="true" to="/">
                  {t("Media Sosial")}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Select>
                  <S.Label htmlFor="select-lang">{t("Pilih Bahasa")}</S.Label>
                  <S.LangSelect
                    onChange={handleChange}
                    value={i18n.language}
                    id="select-lang"
                  >
                    <option value="id">Indonesia</option>
                    <optnion value="en">English</optnion>
                  </S.LangSelect>
                </S.Select>
              </Col>
            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <S.NavLink to="/">
                <S.LogoContainer>
                  <SvgIcon
                    src="logo.svg"
                    aria-label="homepage"
                    width="101px"
                    height="64px"
                  />
                </S.LogoContainer>
              </S.NavLink>
              {/* <S.FooterContainer>
                <SocialLink
                  href="https://github.com/Adrinlol/create-react-app-adrinlol"
                  src="github.svg"
                />
                <SocialLink
                  href="https://twitter.com/Adrinlolx"
                  src="twitter.svg"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/lasha-kakabadze/"
                  src="linkedin.svg"
                />
                <SocialLink
                  href="https://github.com/Adrinlol/"
                  src="instagram.svg"
                />
                <SocialLink
                  href="https://medium.com/@lashakakabadze/"
                  src="medium.svg"
                />
              </S.FooterContainer> */}
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
