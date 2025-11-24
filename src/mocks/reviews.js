export const mockReviews = [
  {
    reviewId: 1,
    nickname: '내가쓴후기',
    createdAt: '2025-11-04T10:23:00',
    updatedAt: '2025-11-05T10:23:00',
    isMyReview: true,
    content: `내가 쓴 후기, 후기 수정, 4줄 이상 부터 더보기 처리, 엔터 처리
내가 쓴 후기, 후기 수정, 4줄 이상 부터 더보기 처리, 엔터 처리
내가 쓴 후기, 후기 수정, 4줄 이상 부터 더보기 처리, 엔터 처리
내가 쓴 후기, 후기 수정, 4줄 이상 부터 더보기 처리, 엔터 처리   내가 쓴 후기, 후기 수정, 4줄 이상 부터 더보기 처리, 엔터 처리
내가 쓴 후기, 후기 수정, 4줄 이상 부터 더보기 처리`,
  },
  {
    reviewId: 2,
    nickname: '구글아이디최대영문30자',
    createdAt: '2025-10-31T19:12:00',
    isMyReview: true,
    content: `생각보다 공간이 넓고 조용해서 버스킹 연습하기 좋았어요.
저녁에는 조명이 은은하게 들어와서 분위기도 괜찮았고요.`,
  },
  {
    reviewId: 3,
    nickname: 'abcdefghijklmnopqrstuvwxyz1234',
    createdAt: '2025-11-02T08:55:00',
    isMyReview: false,
    content: `주차 공간은 넉넉하지 않았지만 접근성은 괜찮았어요.`,
  },
  {
    reviewId: 4,
    nickname: 'Traveler98',
    createdAt: '2025-11-01T14:40:00',
    isMyReview: false,
    content: `장소 주변에 카페가 있어서 쉬기 좋아요.
사람이 많지도 않고 적당해서 공연 영상 찍기에도 괜찮았어요.`,
  },
  {
    reviewId: 5,
    nickname: 'ReviewMaster',
    createdAt: '2025-11-03T17:05:00',
    isMyReview: false,
    content: `이건 아주아주 긴 내용 버전입니다. 
    더보기 테스트용으로 일부러 내용을 길게 넣습니다. 실제로 카카오맵 리뷰처럼 3줄 혹은 4줄 이후부터는 텍스트가 잘리고 더보기가 붙는지 확인해야 합니다.
이 문장은 충분히 길어서 line-clamp 테스트에 사용할 수 있습니다. 게다가 줄바꿈도 포함되어야 해서 리뷰 UI가 실제처럼 보입니다.
이 정도 길이면 더보기 테스트는 충분할 겁니다.`,
  },
];
