package com.jsdckj.ttarawa.users.dto.req;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

public class UserReqDto {

  @Getter
  @Setter
  public static class Reissue {
    @NotEmpty(message = "accessToken 을 입력해주세요.")
    private String accessToken;
  }


  @Getter
  @Setter
  public static class Logout {
    @NotEmpty(message = "잘못된 요청입니다.")
    private String accessToken;
  }

}
