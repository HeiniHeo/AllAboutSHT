{
    Location2 == 'first'
        ? <>
            <option value="인천계양">인천계양</option>
            <option value="남양주진접2">남양주진접2</option>
            <option value="성남복정1">성남복정1</option>
            <option value="의왕청계2">의왕청계2</option>
            <option value="위례">위례</option></>
        : (
            Location2 == 'second'
                ? <>
                    <option value="성남낙생">성남낙생</option>
                    <option value="성남복정2">성남복정2</option>
                    <option value="군포대야미">군포대야미</option>
                    <option value="의왕월암">의왕월암</option>
                    <option value="수원당수">수원당수</option>
                    <option value="부천원종">부천원종</option></>
                : (
                    Location2 == 'third'
                        ? <>
                            <option value="시흥하중">시흥하중</option>
                            <option value="과천주암">과천주암</option></>
                        : (
                            Location2 == 'fourth'
                                ? <> <option value="남양주왕숙2">남양주왕숙2</option>
                                    <option value="성남금토">성남금토</option>
                                    <option value="부천대장">부천대장</option>
                                    <option value="고양창릉">고양창릉</option>
                                    <option value="부천역곡">부천역곡</option>
                                    <option value="시흥거모">시흥거모</option>
                                    <option value="안산장상">안산장상</option>
                                    <option value="안산신길2">안산신길2</option>
                                    <option value="동작구수방사">동작구수방사</option>
                                    <option value="구리갈매역세권">구리갈매역세권</option></>
                                : 'bye'
                        )
                )
        )
}