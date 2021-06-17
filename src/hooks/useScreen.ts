/** 返回的屏幕信息 */
type IReturnInfo = {
  /** 属性返回以像素计的访问者屏幕宽度 */
  width: number;
  /** 属性返回以像素计的访问者屏幕的高度 */
  height: number;
  /** 属性返回访问者屏幕的宽度，以像素计，减去诸如窗口工具条之类的界面特征。 */
  availWidth: number;
  /** 属性返回访问者屏幕的高度，以像素计，减去诸如窗口工具条之类的界面特征 */
  availHeight: number;
};

/**
 * 获取屏幕信息
 * @returns
 */
const useScreen = (): IReturnInfo => {
  const { width, height, availHeight, availWidth } = screen;

  return {
    width,
    height,
    availHeight,
    availWidth,
  };
};

export default useScreen;
