import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ onClick }) => {
    return (
        <div className={css.more}>
            <button
                className={css.button}
                onClick={() => {
                    onClick();
                }}
            >
                Load More
            </button>
        </div>
    );
};

export default LoadMoreBtn;
