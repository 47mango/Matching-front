import {
  Avatar,
  Chip,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@/routes/paths';
import { instance } from '@/services/api.jsx';
import { set } from 'lodash';

// ----------------------------------------------------------------------

const Career = ({ data }) => {
  return (
    <Stack spacing={1}>
      <Typography variant={'lg'}>경력</Typography>

      {data.map((career, index) => (
        <Stack key={`career_${index}`} spacing={0.5}>
          <Typography>{career.careerName}</Typography>
          <Stack direction={'row'} alignItems={'center'}>
            <Typography variant={'xs'} color={'text.secondary'}>
              {`${career.enteringDt} ~ ${career.quitDt != null ? career.quitDt : '재직중'}`}
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

const MajorStack = ({ data }) => {
  return (
    <Stack spacing={1}>
      <Stack direction={'row'} alignItems={'center'} spacing={1}>
        <Typography variant={'lg'}>주요 스킬</Typography>
        <Typography variant={'sm'} color={'text.secondary'}>
          {data.length}개
        </Typography>
      </Stack>

      <Stack flexWrap={'wrap'} direction={'row'} useFlexGap spacing={0.5}>
        {data.map((stack, index) => (
          <Chip
            key={`stack_${index}`}
            label={stack.stNm}
            size={'small'}
            color={`${stack.level}`}
          />
        ))}
      </Stack>
    </Stack>
  );
};

const Intrst = ({ data }) => {
  return (
    <Stack spacing={1}>
      <Stack direction={'row'} alignItems={'center'} spacing={1}>
        <Typography variant={'lg'}>관심 분야</Typography>
        <Typography variant={'sm'} color={'text.secondary'}>
          {data.length}개
        </Typography>
      </Stack>

      <Stack flexWrap direction={'row'} spacing={0.5}>
        {data.map((intrst, index) => (
          <Chip key={`intrst_${index}`} label={intrst} size={'small'} />
        ))}
      </Stack>
    </Stack>
  );
};

const Url = ({ data }) => {
  return (
    <Stack spacing={1}>
      <Typography variant={'lg'}>링크</Typography>

      {data.map((url, index) => (
        <Stack key={`url_${index}`} spacing={0.5}>
          <Typography>{url.intro}</Typography>
          <Link
            href={url.addr}
            variant={'xs'}
            color={'text.secondary'}
            target={'_blank'}
            underline="hover"
          >
            {url.addr}
          </Link>
        </Stack>
      ))}
    </Stack>
  );
};

const ProfileDetails = () => {
  const navigate = useNavigate();

  const [careers, setCareers] = useState([]);
  const [stack, setStack] = useState([]);
  const [interest, setInterest] = useState([]);
  const [url, setUrl] = useState([]);
  const [name, setName] = useState([]);

  //임의 추가
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('member/profile');
        const data = response.data;

        const careersData = data.profile[0].carrer.map((career) => ({
          careerName: career.CARRER_NM,
          enteringDt: career.ENTERING_DT,
          quitDt: career.QUIT_DT,
        }));
        setCareers(careersData);

        const stacksData = data.profile[0].stack.map((stack) => ({
          stNm: stack.ST_NM,
          level: stack.ST_LEVEL,
        }));

        setStack(stacksData);

        const interestData =
          data.profile[0].interest &&
          data.profile[0].interest.map((interest) => interest.INTEREST_NM);
        setInterest(interestData);

        const urlsData = data.profile[0].url.map((url) => ({
          addr: url.URL_ADDR,
          intro: url.URL_INTRO,
        }));
        setUrl(urlsData);

        setName(data.profile[0].USER_NM);
      } catch (error) {
        console.log('error: ', error);
      }
    };

    fetchData();
  }, []);

  // ----------------------------------------------------------------------

  return (
    <Stack spacing={3} p={3} bgcolor={'background.default'}>
      <Typography variant={'xl'}>프로필</Typography>

      <Stack alignItems={'center'}>
        <Avatar alt={'프로필 이미지'} sx={{ width: 100, height: 100 }} />
      </Stack>

      {/* 이름, 프로필 수정 버튼 */}
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        spacing={1}
      >
        <Typography variant={'xl'}>{name}</Typography>
        <IconButton onClick={() => navigate(PATHS.profiles.editProfile)}>
          <Icon icon={'akar-icons:edit'} fontSize={24} />
        </IconButton>
      </Stack>

      {/* 한 줄 소개 */}
      <Stack>
        <Typography variant={'lg'}>
          나를 표현하는 한줄 소개에 불러올 데이터가 없어요.
        </Typography>
      </Stack>

      {/* 구분선 */}
      <Divider />

      {/* 경력 */}
      <Career data={careers} />

      {/* 구분선 */}
      <Divider />

      {/*/!* 주요 스킬 *!/*/}
      <MajorStack data={stack} />

      {/*/!* 관심 분야 *!/*/}
      <Intrst data={interest} />

      {/*/!* 구분선 *!/*/}
      <Divider />

      {/*/!* 링크 *!/*/}
      <Url data={url} />
    </Stack>
  );
};

export default ProfileDetails;
