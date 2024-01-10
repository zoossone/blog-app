import {Link} from "react-router-dom";

interface PostListProps {
    hasNavigation?: boolean;
}

export default function PostList({ hasNavigation = true }: PostListProps) {
    return (
        <>
            {hasNavigation && (
                <div className="post__navigation">
                    <div className="post__navigation--active">전체</div>
                    <div>나의 글</div>
                </div>
            )}
            <div className="post__list">
                {[...Array(10)].map((el, index) => (
                    <div key={index} className="post__box">
                        <Link to={`/posts/${index}`}>
                            <div className="post__profile-box">
                                <div className="post__profile"></div>
                                <div className="post__author-name">누구누구</div>
                                <div className="post__date">2024.01.10 수요일</div>
                            </div>
                            <div className="post__title">게시글 {index}</div>
                            <div className="post__text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium repellendus repudiandae consequuntur blanditiis sunt iste omnis quod. Obcaecati a corporis dolore. Accusamus deserunt placeat debitis officiis asperiores maiores, deleniti fugit?
                            </div>
                            <div className="post__utils-box">
                                <div className="post__delete">삭제</div>
                                <div className="post__edit">수정</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}