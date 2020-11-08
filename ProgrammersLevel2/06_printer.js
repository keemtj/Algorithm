/**
 * 프린터 (스택/큐)
 * 일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄되기 떄문에, 중요한 문서가 나중에 인쇄될 수 있다
 * 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발
 *
 * 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다
 * 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다
 * 3. 그렇지 않으면 J를 인쇄합니다
 *
 * 인쇄물: A, B, C, D
 * 중요도: 2, 1, 3, 2
 * 순서상: C, D, A, B
 */

function solution(priorities, location) {
  return 0;
}

solution();