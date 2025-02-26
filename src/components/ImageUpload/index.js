import IconButton from '@components/IconButton';
import createTweetSvg from '@assets/createTweet.svg';
import PropTypes from 'prop-types';
import { fileByBase64 } from '@utils/';
import style from './index.module.scss';

/**
* 图片上传
*/
const ImageUpload = ({
  onChange,
}) => {
  const onChangeUpFile = (e) => {
    const { files } = e.target;
    const fls = Object.values(files);
    const flss = fls.map((f) => new Promise((r) => {
      fileByBase64(f).then((res) => {
        r({
          key: f.name,
          content: res,
        });
      });
    }));
    Promise.all(flss).then((res) => {
      const result = {};
      res.forEach((item) => {
        result[item.key] = item.content;
      });
      onChange(result);
    });
    e.target.value = '';
  };
  return (
    <div className={style.container}>
      <input type="file" encType="multipart/form-data" accept="image/gif.image/jpg" className={style.upFile} multiple="multiple" onChange={onChangeUpFile} />
      <IconButton src={createTweetSvg} svgClass={style.imageUpload} className={style.imageButton} />
    </div>
  );
};

ImageUpload.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ImageUpload;
