import React from 'react'
import * as S from './footer.style'

export default function Footer() {
  return (
    <S.Footer>
      <div className="container">
        <S.Footer1>
          <div>© 2021 MyShop. Tất cả các quyền được bảo lưu.</div>
          <S.Language>
            Ngôn ngữ:
            <span>Tiếng Anh</span>
            <span>Tiếng Việt</span>
          </S.Language>
        </S.Footer1>
        <S.Footer2>
          <div>Công ty TNHH Shoppee</div>
          <div>
            Địa chỉ: Tầng 22, Tòa nhà Inter Lotte Hà Nội, 54 Liễu Giai, phường
            Cống Vị, Quận Ba Đình, Hà Nội. Tổng đài hỗ trợ: 19001221 - Email:
            cskh@hotro.myshop.vn
          </div>
          <div>
            Mã số doanh nghiệp: 01067111173786 do Sở Kế hoạch & Đầu tư TP Hà Nội
            cấp lần đầu ngày 10/02/2016
          </div>
          <div>© 2015 - Bản quyền thuộc về Công ty TNHH MyShop</div>
        </S.Footer2>
      </div>
    </S.Footer>
  )
}
