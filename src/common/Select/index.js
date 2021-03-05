import {withTranslation} from 'react-i18next'

import * as S from './styles'

const Select = ({id, name, placeholder, onChange, t}) => (
  <S.Container>
    <label htmlFor={name}>{t(id)}</label>
    <S.Select
      name={name}
      id={name}
      onChange={onChange}
    >
      <option>Pilih Topik</option>
      <option>Pembuatan NIB</option>
      <option>Desain Kemasan</option>
    </S.Select>
  </S.Container>
)

export default withTranslation()(Select)